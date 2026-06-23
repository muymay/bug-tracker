import express from 'express';
import cors from 'cors';
import db from './database.js' // import the database connection
const app = express();
const port = 3001 // 3001 is where React runs
app.use(cors());
app.use(express.json()); // to parse JSON bodies act as a middleware
// app.get('/bugs', (req, res) => {
//     res.json([
//     { id: 1,
//       title: 'Login fails with spaces',
//       severity: 'high',
//       status: 'open' 
//     },
//     { id: 2,
//       title: 'Dropdown not closing',
//       severity: 'medium',
//       status: 'open' 
//     },
//     { id: 3,
//       title: 'Table not filtering',
//       severity: 'critical',
//       status: 'in progress' 
//     },
//     { id: 4,
//       title: 'Form submits empty',
//       severity: 'high',
//       status: 'resolved' 
//     },
//     { id: 5,
//       title: 'Button misaligned on mobile',
//       severity: 'low',
//       status: 'open' 
//     } 
//     ])
// })
app.get('/bugs', (req, res) => {
  const { severity, status } = req.query;
  let result;
  if (severity && status) {
    result = db.prepare('SELECT * FROM bugs WHERE severity = ? AND status = ?').all(severity, status);
  } else if (severity) {
    result = db.prepare('SELECT * FROM bugs WHERE severity = ?').all(severity);
  } else if (status) {
    result = db.prepare('SELECT * FROM bugs WHERE status = ?').all(status);
  } else {
    result = db.prepare('SELECT * FROM bugs').all();
  }
  res.json(result);
});
app.post('/bugs', (req, res) => {
  const { title, severity, status } = req.body;
  const result = db.prepare('INSERT INTO bugs (title, severity, status) VALUES (?, ?, ?)').run(title, severity, status);
  const newBug = db.prepare('SELECT * FROM bugs WHERE id = ?').get(result.lastInsertRowid);
  res.json(newBug);
});
app.delete('/bugs/:id', (req, res) => {
  const id = req.params.id;
  const stmt = db.prepare('DELETE FROM bugs WHERE id =?');
  stmt.run(id);
  res.json({ message: 'Bug deleted' });
});
app.patch('/bugs/:id', (req, res) => {
  const id = req.params.id;
  const {status} = req.body;
  const upd = db.prepare('UPDATE bugs SET status = ? WHERE id = ?');
  upd.run(status,id);
  res.json({ message: 'Bug updated' })
});
app.listen (port, () => {
    console.log('Listening to port');
});


// node backend/server.js
// Connect to: http://localhost:3001/bugs
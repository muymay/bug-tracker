import express from 'express';
import cors from 'cors';
import db from './database.js' // import the database connection
const app = express();
const port = 3001 // 3001 is where React runs
app.use(cors());
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
  const bugs = db.prepare('SELECT * FROM bugs').all(); // get all the bugs from the database
  res.json(bugs); // send the bugs as a JSON response
});
app.listen (port, () => {
    console.log('Listening to port');
})

// node backend/server.js
// Connect to: http://localhost:3001/bugs
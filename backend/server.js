import express from 'express';
const app = express();
const port = 3001 // 3001 is where React runs

app.get('/bugs', (req, res) => {
    res.json([
    { id: 1,
      title: 'Login fails with spaces',
      severity: 'high',
      status: 'open' 
    },
    { id: 2,
      title: 'Dropdown not closing',
      severity: 'medium',
      status: 'open' 
    },
    { id: 3,
      title: 'Table not filtering',
      severity: 'critical',
      status: 'in progress' 
    },
    { id: 4,
      title: 'Form submits empty',
      severity: 'high',
      status: 'resolved' 
    },
    { id: 5,
      title: 'Button misaligned on mobile',
      severity: 'low',
      status: 'open' 
    } 
    ])
})
app.listen (port, () => {
    console.log('Listening to port');
})

// node backend/server.js
// Connect to: http://localhost:3001/bugs
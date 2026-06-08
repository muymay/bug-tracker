import BugList from './components/BugList'
import { useState, useEffect } from 'react';
// App.jsx the parent, owns the data
// BugList = the child, displays the data

// Add useState for bugs — starts as empty array []
// Add useEffect that fetches from http://localhost:3001/bugs
// Store the result in bugs state using setBugs
function App() {
  // const bugs = [
  //   { id: 1,
  //     title: 'Login fails with spaces',
  //     severity: 'high',
  //     status: 'open' 
  //   },
  //   { id: 2,
  //     title: 'Dropdown not closing',
  //     severity: 'medium',
  //     status: 'open' 
  //   },
  //   { id: 3,
  //     title: 'Table not filtering',
  //     severity: 'critical',
  //     status: 'in progress' 
  //   },
  //   { id: 4,
  //     title: 'Form submits empty',
  //     severity: 'high',
  //     status: 'resolved' 
  //   },
  //   { id: 5,
  //     title: 'Button misaligned on mobile',
  //     severity: 'low',
  //     status: 'open' 
  //   }
  // ];
  const [bugs, setBugs] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/bugs')
      .then(res => res.json())
      .then(data => setBugs(data));
  }, []);
  return (
    <div>
      <h1 className="text-3x1 font-bold text-center mt-8"> 
        Bug Tracker </h1>
      <BugList bugs={bugs} />
    </div>
  );
}

export default App
// npm run dev

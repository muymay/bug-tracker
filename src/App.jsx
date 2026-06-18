import BugList from './components/BugList'
import { useState, useEffect } from 'react';
import BugForm from './components/BugForm';
import Dashboard from './components/Dashboard'
// App.jsx the parent, owns the data
// BugList = the child, displays the data

// Add useState for bugs — starts as empty array []
// Add useEffect that fetches from http://localhost:3001/bugs
// Store the result in bugs state using setBugs
// function App() {
//   // const bugs = [
//   //   { id: 1,
//   //     title: 'Login fails with spaces',
//   //     severity: 'high',
//   //     status: 'open' 
//   //   },
//   //   { id: 2,
//   //     title: 'Dropdown not closing',
//   //     severity: 'medium',
//   //     status: 'open' 
//   //   },
//   //   { id: 3,
//   //     title: 'Table not filtering',
//   //     severity: 'critical',
//   //     status: 'in progress' 
//   //   },
//   //   { id: 4,
//   //     title: 'Form submits empty',
//   //     severity: 'high',
//   //     status: 'resolved' 
//   //   },
//   //   { id: 5,
//   //     title: 'Button misaligned on mobile',
//   //     severity: 'low',
//   //     status: 'open' 
//   //   }
//   // ];
//   const chartData = [
//     { severity: 'critical', count: bugs.filter(bug => bug.severity === 'critical').length },
//     { severity: 'high', count: bugs.filter(bug => bug.severity === 'high').length },
//     { severity: 'medium', count: bugs.filter(bug => bug.severity === 'medium').length },
//     { severity: 'low', count: bugs.filter(bug => bug.severity === 'low').length },
//   ];
//   const [bugs, setBugs] = useState([]);
//   useEffect(() => {
//     fetch('http://localhost:3001/bugs')
//       .then(res => res.json())
//       .then(data => setBugs(data));
//   }, []);
//   return (
//     <div>
//       <h1 className="text-3x1 font-bold text-center mt-8"> 
//         Bug Tracker </h1>
//       <BugForm onBugAdded={(newBug) => setBugs([...bugs, newBug])} />
//       {/* new array = [all existing bugs + the new bug] */}
//       <BugList bugs={bugs}
//       onDelete={(id) => {
//         fetch(`http://localhost:3001/bugs/${id}`, { method: 'DELETE' })
//           .then(() => setBugs(bugs.filter(bug => bug.id !== id)))
//       }} 
//       onStatusChange={(id, newStatus) => {
//         fetch(`http://localhost:3001/bugs/${id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({status: newStatus}) })
//           .then(() => setBugs(bugs.map(bug =>
//             bug.id = id ? {...bug, status: newStatus} : bug
//           )))
//       }}
//     />
//     </div>
//   );
// }

// export default App
// npm run dev

function App() {
  const [bugs, setBugs] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:3001/bugs')
      .then(res => res.json())
      .then(data => setBugs(data));
    }, []);

  const chartData = [
    { severity: 'critical', count: bugs.filter(bug => bug.severity === 'critical').length },
    { severity: 'high', count: bugs.filter(bug => bug.severity === 'high').length },
    { severity: 'medium', count: bugs.filter(bug => bug.severity === 'medium').length },
    { severity: 'low', count: bugs.filter(bug => bug.severity === 'low').length },
  ];

  const statusDatas = [
    { name: 'Open', value: bugs.filter(bug => bug.status === 'open').length },
    { name: 'In Progress', value: bugs.filter(bug => bug.status === 'in_progress').length },
    { name: 'Resolved', value: bugs.filter(bug => bug.status === 'resolved').length },
  ];

  return (
    <div>
      <h1 className="text-3x1 font-bold text-center mt-8"> 
        Bug Tracker 
      </h1>
      
      <Dashboard chartData={chartData} statusDatas={statusDatas} />
      
      <BugForm onBugAdded={(newBug) => setBugs([...bugs, newBug])} />
      
      <BugList 
        bugs={bugs}
        onDelete={(id) => {
        fetch(`http://localhost:3001/bugs/${id}`, { method: 'DELETE' })
          .then(() => setBugs(bugs.filter(bug => bug.id !== id)))
         }} 
        onStatusChange={(id, newStatus) => {
        fetch(`http://localhost:3001/bugs/${id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({status: newStatus}) })
          .then(() => setBugs(bugs.map(bug =>
            bug.id = id ? {...bug, status: newStatus} : bug
          )))
         }}
      />
    </div>
  );
}
export default App
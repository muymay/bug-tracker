import BugList from './components/BugList'
import { useState, useEffect } from 'react';
import BugForm from './components/BugForm';
import Dashboard from './components/Dashboard'
import { Routes, Route, Link } from 'react-router-dom'
import BugDetail from './pages/BugDetail'

function App() {
  const [bugs, setBugs] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    let url = 'https://bug-tracker-production-ef02.up.railway.app/bugs';
    if (activeFilter === 'critical') {
      url += '?severity=critical';
    } else if (activeFilter === 'open') {
      url += '?status=open';
    }
    fetch(url)
      .then(res => res.json())
      .then(data => {setBugs(data);
                     setLoading(false);
  })
      .catch(err => {
      setError('Failed to load bugs. Is the server running?');
      setLoading(false);
      });
    }, [activeFilter]);

  const chartData = [
    { severity: 'critical', count: bugs.filter(bug => bug.severity === 'critical').length },
    { severity: 'high', count: bugs.filter(bug => bug.severity === 'high').length },
    { severity: 'medium', count: bugs.filter(bug => bug.severity === 'medium').length },
    { severity: 'low', count: bugs.filter(bug => bug.severity === 'low').length },
  ];

  const statusDatas = [
    { name: 'Open', value: bugs.filter(bug => bug.status === 'open').length },
    { name: 'In Progress', value: bugs.filter(bug => bug.status === 'in progress').length },
    { name: 'Resolved', value: bugs.filter(bug => bug.status === 'resolved').length },
  ];
  // Wrap return content in <Route path ="/" element={...} />
  // add a second route <Route path="/bugs/:id" element={<BugDetail />} />
  
  return (
    <Routes>
      <Route path ="/" element={
        <div>
          <h1 className="text-3x1 font-bold text-center mt-8"> 
            Bug Tracker 
          </h1>
          
          <Dashboard chartData={chartData} statusDatas={statusDatas} />
          
          <BugForm onBugAdded={(newBug) => setBugs([...bugs, newBug])} />
          
          {loading && <p>Loading bugs...</p>}
          {error && <p className="text-red-500">{error}</p>}

          <BugList 
            bugs={bugs}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            onDelete={(id) => {
            fetch(`https://bug-tracker-production-ef02.up.railway.app/bugs/${id}`, { method: 'DELETE' })
              .then(() => setBugs(bugs.filter(bug => bug.id !== id)))
            }} 
            onStatusChange={(id, newStatus) => {
            fetch(`https://bug-tracker-production-ef02.up.railway.app/bugs/${id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({status: newStatus}) })
              .then(() => setBugs(bugs.map(bug =>
                bug.id = id ? {...bug, status: newStatus} : bug
              )))
            }}
          />
        </div>
      } />
      <Route path="/bugs/:id" element={<BugDetail />} />
    </Routes>
  );
}
export default App
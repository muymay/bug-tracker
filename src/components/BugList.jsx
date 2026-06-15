import { useState } from 'react';

// receive the prop
export default function BugList({bugs, onDelete}) {
  const [activeFilter, setActiveFilter] = useState('all');
  const filteredState = bugs.filter( bug => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'critical') return bug.severity === activeFilter;
    if (activeFilter === 'open')  return bug.status === activeFilter;
    return true;
  });

  const severityStyles = {
  'critical': 'bg-red-500 text-white',
  'high': 'bg-orange-500 text-white',
  'medium': 'bg-yellow-500 text-white',
  'low': 'bg-green-500 text-white'
}

const statusStyles = {
  'open': 'bg-blue-500 text-white',
  'in progress': 'bg-purple-500 text-white',
  'resolved': 'bg-gray-500 text-white'
}

  return (
    <div className="p-4">
      
      <p>Open bugs: {bugs.filter(bug => bug.status === 'open').length}</p>

      <div className="flex gap-2 mb-4">
        <button className="px-4 py-2 rounded bg-gray-600 text-white" 
          onClick={() => setActiveFilter('all')}>All</button>
        <button className="px-4 py-2 rounded bg-gray-600 text-white" 
          onClick={() => setActiveFilter('critical')}>Critical</button>
        <button className="px-4 py-2 rounded bg-gray-600 text-white" 
          onClick={() => setActiveFilter('open')}>Open</button>
      </div>

      <table className="w-full text-center border-collapse">
        <thead>
          <tr>
            <th>Title</th>
            <th>Severity</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredState.map(level => (
            <tr key={level.id}>
              <td>{level.title}</td>
              <td className={`rounded-full px-3 py-1 ${severityStyles[level.severity]}`}>{level.severity}</td>
              <td className={`rounded-full px-3 py-1 ${statusStyles[level.status]}`}>{level.status}</td>
              <td> <button onClick={() => onDelete(level.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

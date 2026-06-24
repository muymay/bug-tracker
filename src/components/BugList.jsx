import { useState } from 'react';

// receive the prop
// Accept activeFilter and onFilterChange as props instead
// Call onFilterChange when buttons are clicked
export default function BugList({bugs, onDelete, onStatusChange , activeFilter, onFilterChange }) {

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
          onClick={() => onFilterChange('all')}>All</button>
        <button className="px-4 py-2 rounded bg-gray-600 text-white" 
          onClick={() => onFilterChange('critical')}>Critical</button>
        <button className="px-4 py-2 rounded bg-gray-600 text-white" 
          onClick={() => onFilterChange('open')}>Open</button>
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
          {bugs.map(level => (
            <tr key={level.id}>
              <td>{level.title}</td>
              <td className={`rounded-full px-3 py-1 ${severityStyles[level.severity]}`}>{level.severity}</td>
              <td><select
                  value={level.status}
                  onChange={(e) => onStatusChange(level.id, e.target.value)}>
                  <option value="open">Open</option> 
                  <option value="in progress">In Progress</option>
                  <option value="resolved">Resolved</option>
                  </select></td>
              <td> <button onClick={() => onDelete(level.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

const bugs = [
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
];

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

function BugList() {
    return(
        <table className = "w-full text-center border-collapse"> 
            <thead>
            <tr>
                <th>Title</th>
                <th>Severity</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody> 
            {bugs.map(level => (
                <tr key = {level.id}>
                    <td>{level.title}</td>
                    <td className={`rounded-full p-4 ${severityStyles[level.severity]}`}>{level.severity}</td>
                    <td className={`rounded-full p-4 ${statusStyles[level.status]}`}>{level.status}</td>
                </tr>                
            ))}
            </tbody>
        </table>
    );
}

export default BugList;
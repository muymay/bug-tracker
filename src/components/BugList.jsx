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

function BugList() {
    return(
        <table>
            <thead>
            <tr>
                <th>Title</th>
                <th>Severity</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody> {bugs.map(level => (
                <tr key = {level.id}>
                    <td>{level.title}</td>
                    <td>{level.severity}</td>
                    <td>{level.status}</td>
                </tr>                
            ))}
            </tbody>
        </table>
    );
}

export default BugList;
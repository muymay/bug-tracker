import BugList from './components/BugList'
// App.jsx the parent, owns the data
// BugList = the child, displays the data
function App() {
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

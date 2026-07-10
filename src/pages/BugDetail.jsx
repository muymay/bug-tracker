import {useParams, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
export default function BugDetail() {
  const {id} = useParams();
  const [bug, setBug] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`http://localhost:3001/bugs/${id}`)
      .then(res => res.json())
      .then(data => {
        setBug(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      })
  }, [id])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  if (!bug) return <p>No bug found</p>

  return (
    <div>
      <h2>{bug.title}</h2>
      <p>Severity: {bug.severity}</p>
      <p>Status: {bug.status}</p>
      <p>Created at: {bug.created_at}</p>
      <Link to="/">← Back to bugs</Link>
    </div>
  )
}  
// Three controlled inputs — title, severity, status
// A submit button
// useState for each field
// An onSubmit handler that calls fetch with POST method
import React, { useState } from 'react';

const BugForm = ({ onBugAdded }) => {
    const [title, setTitle] = useState('');
    const [severity, setSeverity] = useState('low');
    const [status, setStatus] = useState('open');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/bugs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, severity, status })
            });
            if (response.ok) {
                const newBug = await response.json();
                onBugAdded(newBug);
                setTitle('');
                setSeverity('low');
                setStatus('open');
            } else {
                alert('Failed to add bug');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while adding the bug');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Bug Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <select value={severity} onChange={(e) => setSeverity(e.target.value)}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="critical">Critical</option>
            </select>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="open">Open</option>
                <option value="in progress">In Progress</option>
                <option value="resolved">Resolved</option>
            </select>
            <button type="submit">Add Bug</button>
        </form>
    );
}
export default BugForm;
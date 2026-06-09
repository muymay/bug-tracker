// better-sqlite3 works differently from fetch. It's synchronous — no async/await needed
import Database from 'better-sqlite3';
const db = new Database('backend/bugs.db');

db.exec(`
    CREATE TABLE IF NOT EXISTS bugs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        severity TEXT NOT NULL,
        status TEXT NOT NULL,
        created_at TEXT DEFAULT (datetime('now'))
        )
    `);

const count = db.prepare('SELECT COUNT(*) as count FROM bugs').get();

// count(*) - counts the rows
if (count.count === 0) {
    const insert = db.prepare('INSERT INTO bugs (title, severity, status) VALUES (? , ?, ?)');

    insert.run('Login fails with spaces', 'high', 'open');
    insert.run('Dropdown not closing', 'medium', 'open');
    insert.run('Table not filtering', 'critical', 'in progress');
    insert.run('Form submits empty', 'high', 'resolved');
    insert.run('Button misaligned on mobile', 'low', 'open');
}
// for statements that modify daat
export default db;
## Bug-Tracker Project
### Phase 1 - React Set Up + Bug List (Start June 1, 2026, End June 6, 2026)

Day 1: June 1, 2026
Installed Vite and React:
`npm create vite@latest bug-tracker -- --template react`

installed dependencies:
`npm install`

Created a simple React app with a header "Bug Tracker" in `src/App.jsx`
Readings: 
1. https://react.dev/learn
2. https://developer.mozilla.org/en-US/ 

Day 2: June 2, 2026
Goal: BugList component rendering hardcoded bugs as a table.

Created a `BugList` component in `src/components/BugList.jsx` that renders a table with hardcoded bug data.
Used `map()` and `key` props to render the list of bugs.
Learned that => () or {} needs to be returned explicitly in arrow functions when using `map()`.
Questions for this phase: 
1. What would happen if you removed the `key` prop from each `<tr>`?

Answer: it will get an error it would still give the output but again it will say that it child should have a unique key prop.
2. Why is `bugs` defined outside the component function, not inside it?

Answer: Because we are gathering all from that data so it is contained in an outside component function also it is static data.
3. What does `export default BugList` do — why does App.jsx need it?

Answer: allows being imported from other files and give them the freedom to do whatever they want with it.

Day 3: June 3, 2026
Goal: Install Tailwind CSS setup + color coded badges for bug status.
Questions for this phase:
1. What file do you need to update to register the Tailwind Vite plugin? what does adding it there do?

Answer: We need to update `vite.config.js` to register the Tailwind Vite plugin. Adding it there allows Vite to process Tailwind CSS files and apply the necessary transformations during the
build process.
2. What is the one CSS import line you need to add and which file does it go in?

Answer: The one CSS import line you need to add is `@import "tailwindcss` and it goes in the `src/index.css` file. Vite projects load `index.css` globally, which makes Tailwind available throughout the app.

Learned how to use Tailwind CSS classes to style the bug status badges with different colors based on their status (e.g., "Open" in red, "In Progress" in yellow, "Closed" in green). Using ternary operators to conditionally apply Tailwind classes based on the bug's status.

Readings:
1. https://react.dev/learn/rendering-lists

Day 4: June 4, 2026

useState filter buttons + open bug count 
state change triggers re-render
filteredState recalculates 

Reading
1. react.dev/learn/state-a-components-memory

Day 5: June 5, 2026
Goal - Learn passing props to child components 
What changes today: In `App.jsx`:
* Move the bugs array here
* Pass it to `BugList` as a prop called `bugs`

In `BugList.jsx`:
* Remove the bugs array from useState
* Receive `bugs` as a prop instead
* Keep everything else the same 

After:
No change in the UI, but 
Before -> BugList owned its own data
After -> App owns data, passes to BugList

Reading:
1. https://react.dev/learn/passing-props-to-a-component

### Phase 2 - React Set Up + Bug List (Start June 7, 2026, End June 15, 2026)

Day 6: June 7, 2026

Goal: Set up Express server + API endpoint to serve bugs from a SQLite database.

Created backend/server.js with Express server and API endpoint `/api/bugs` that connects to a SQLite database and returns bug data as JSON.

Browser requsted `http://localhost:3000/api/bugs` and received JSON response with bug data.

Goal: Connect React frontend to Express backend to fetch and display bugs.
What was added and changed:
- Removed hardcoded bugs from `App.jsx`
- Added useState([] ) for bugs - starts empty
- Added useEffect that fetches from http://localhost:3001/bugs on mount 
- Added cors() to Express so React can talk to the backend

Key concepts learned:
- useEffect with [] runs once on mount only
- fetch() returns a Promise — .then() chains handle the response
- CORS blocks cross-origin requests by default — cors() middleware fixes it
- Two terminals needed — one for React, one for Express

Bug encountered: table showed "Open bugs: 0" — server wasn't running
Fixed: opened second terminal, ran both servers simultaneously

Reading:
1. https://expressjs.com/en/starter/hello-world.html
2. https://sqlitetutorial.net/sqlite-select
3. https://react.dev/learn/synchronizing-with-effects 

Day 7: June 8, 2026 

id -> unique identifier (auto-incremented)
title -> bug description
severity -> critical, high, medium, low
status -> open, in progress, resolved
created_at -> when the bug was logged

Goal: Connect SQLite database to Express server

What I built:
- Created `database.js` to set up SQLite connection and create `bugs` table if it doesn't exist
- Seeded 5 initial bugs using COUNT(*) to check if table is empty before inserting
- Updated `server.js` to query the `bugs` table and return results as JSON
- Full stack working: React -> Express -> SQLite -> Express -> React

Learned:
- Create table with SQL
- db.prepare.all() return all rows as a JS array of objects
- db.prepare.run() executes a query without returning data (used for INSERT)

Reading:
1. https://www.sqlitetutorial.net/sqlite-insert/

Day 8: June 9, 2026

Goal: add bug form to create new bugs via POST request

GET -> fetch existing data
POST -> create new data

app.use(express.json()) -> parse incoming request body
req.body -> where your form data arrives

Built:
- BugForm component with controlled inputs
- POST /bugs route in Express
- SQLite INSERT on form submit
- onBugAdded prop passes new bug from child to parent
- Spread operator adds new bug to state without mutation

Key concepts:
- POST = create data, GET = read data
- express.json() parses incoming request body
- [...bugs, newBug] creates new array — never mutate state directly
- Data persists in SQLite after server restart

Reading:
1. https://expressjs.com/en/guide/routing/

Day 9: June 14, 2026

Goal: Delete button on each row removes bug from SQLite and disappears from table immediately.

Built:
- DELETE /bugs/:id route in Express
- req.params.id extracts id from URL
- Delete button in each BugList row
- onDelete prop passed from App.jsx to BugList
- bugs.filter() removes deleted bug from state without mutation

Key concepts:
- DELETE SQL always needs WHERE — without it wipes entire table
- Reserved word 'delete' can't be variable name — used 'stmt'
- URL parameters use :id syntax in Express → req.params.id
- filter() removes item from state same way spread adds it
- Routes must be defined before app.listen()

Reading:
1. https://www.sqlitetutorial.net/sqlite-delete

Day 10: June 15, 2026
Goal: A dropdown in each row that changes a bug's status and saves it to the SQLite immediately.

Built:
- PATCH /bugs/:id route in Express
- UPDATE SQL query - SET status = ? where id = ?
- onStatus prop passed from App.jsx to BugList
- bugs.map() updates one bug in state without mutation
Key concepts:
- PATCH is used to update existing data always needs WHERE 
- PATCH = partial update (one field), PUT = full replace
- {...bug, status: newStatus} copies object and overrides status only
- spread on object vs array -> same idea, different syntax
- Status persists after server restart —> SQLite storing correctly

Reading:
1. https://www.sqlitetutorial.net/sqlite-update

### Phase 3 - Filters + Dashboards (Start June 7, 2026, End June 15, 2026)

Day 11: (June 16, 2026)
Goal: Build a bar chart dashboard showing bug count by severity

Built:
- Dashboard.jsx component using Recharts BarChart
- chartData array transforms bugs into {severity, count} objects
- Connected Dashboard to App.jsx, passing chartData as prop

Key concepts:
- dataKey prop connects chart elements to data object keys
- XAxis dataKey="severity" reads labels, Bar dataKey="count" reads heights
- Order matters in JavaScript — chartData using bugs.filter() 
  must be defined AFTER useState/useEffect that creates bugs
- CartesianGrid, Tooltip, XAxis, YAxis are separate composable pieces

Reading:
1. https://recharts.github.io/?p=/en-US/examples
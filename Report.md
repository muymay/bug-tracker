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

### Phase 2 - React Set Up + Bug List (Start June 7, 2026, End - )

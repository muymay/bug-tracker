## Bug-Tracker Project Report through Github
### Phase 1 - React Set Up + Bug List (Start June 1, 2026, End - )

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

Readings:
1. https://react.dev/learn/rendering-lists
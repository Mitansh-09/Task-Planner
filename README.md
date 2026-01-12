
# Task Planner:

A fully functional Task Planner web application built using HTML, CSS, and JavaScript.  
This project demonstrates strong frontend fundamentals including DOM manipulation**, state management, and localStorage persistence** — all without using any backend or frameworks.

---

##  Live Features

-  Add new tasks
-  Edit existing tasks
-  Mark tasks as completed
-  Delete individual tasks
-  Clear all tasks
-  Enter key support for adding tasks
-  Persistent storage using localStorage
-  Task priority (High / Medium / Low)
-  Priority-based color indicators
-  Filter tasks (All / Completed / Pending)
-  Dark / Light mode toggle (saved in localStorage)
-  Task creation timestamp
-  Responsive and clean UI
-  Empty-state message when no tasks exist

---

##  Technologies Used

- HTML5 – Structure and layout
- CSS3 – Styling, Flexbox layout, themes
- JavaScript (ES6) – Logic, events, DOM manipulation, storage

---

## Project Structure:
1. User enters a task and selects a priority.
2. Task is added by clicking Add Task or pressing "Enter".
3. Tasks are stored as objects in an array.
4. The array is saved in browser localStorage.
5. UI updates dynamically using DOM manipulation.
6. Tasks persist even after page refresh.
7. Filters and themes work without reloading the page.

---

## 💾 LocalStorage Usage

Tasks are stored in localStorage as JSON:
localStorage.setItem("tasks", JSON.stringify(tasks));

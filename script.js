document.addEventListener("DOMContentLoaded", () => {

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let filter = "all";

  const taskInput = document.getElementById("taskInput");
  const prioritySelect = document.getElementById("prioritySelect");
  const addBtn = document.getElementById("addBtn");
  const clearAllBtn = document.getElementById("clearAll");
  const taskList = document.getElementById("taskList");
  const completedSpan = document.getElementById("completed");
  const pendingSpan = document.getElementById("pending");
  const emptyMsg = document.getElementById("emptyMsg");
  const themeToggle = document.getElementById("themeToggle");

  // THEME
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
  }

  themeToggle.onclick = () => {
    document.body.classList.toggle("light");
    localStorage.setItem("theme",
      document.body.classList.contains("light") ? "light" : "dark");
  };

  // ADD TASK
  addBtn.onclick = addTask;
  taskInput.addEventListener("keydown", e => {
    if (e.key === "Enter") addTask();
  });

  function addTask() {
    const text = taskInput.value.trim();
    if (!text) return;

    tasks.push({
      id: Date.now(),
      text,
      completed: false,
      priority: prioritySelect.value,
      createdAt: new Date().toLocaleString()
    });

    taskInput.value = "";
    save();
  }

  // FILTER
  document.querySelectorAll(".filters button").forEach(btn => {
    btn.onclick = () => {
      filter = btn.dataset.filter;
      render();
    };
  });

  // CLEAR ALL
  clearAllBtn.onclick = () => {
    tasks = [];
    save();
  };

  function save() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    render();
  }

  function render() {
    taskList.innerHTML = "";

    let filtered = tasks.filter(t => {
      if (filter === "completed") return t.completed;
      if (filter === "pending") return !t.completed;
      return true;
    });

    filtered.forEach((task, index) => {
      const li = document.createElement("li");
      li.classList.add(`priority-${task.priority}`);
      if (task.completed) li.classList.add("completed");

      const span = document.createElement("span");
      span.innerHTML = `${task.text}<br><small>${task.createdAt}</small>`;

      const btns = document.createElement("div");

      const done = document.createElement("button");
      done.textContent = "✔";
      done.onclick = () => {
        task.completed = !task.completed;
        save();
      };

      const del = document.createElement("button");
      del.textContent = "❌";
      del.onclick = () => {
        tasks.splice(index, 1);
        save();
      };

      btns.append(done, del);
      li.append(span, btns);
      taskList.appendChild(li);
    });

    completedSpan.textContent = tasks.filter(t => t.completed).length;
    pendingSpan.textContent = tasks.filter(t => !t.completed).length;
    emptyMsg.style.display = tasks.length ? "none" : "block";
  }

  render();
});
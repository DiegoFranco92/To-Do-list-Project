const form = document.querySelector("form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const taskValue = taskInput.value;
  if (!taskValue) return;
  const task = document.createElement("li");
  task.innerHTML = taskValue + " <button>x</button>";
  taskList.appendChild(task);
  taskInput.value = "";
  task.querySelector("button").addEventListener("click", function() {
    task.remove();
  });
});


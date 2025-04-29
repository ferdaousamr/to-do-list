document.addEventListener("DOMContentLoaded", function () {
const taskInput = document.getElementById("task");
const addBtn = document.querySelector("button");
const list = document.getElementById("list");

addBtn.addEventListener("click", function () {
const taskText = taskInput.value.trim();
if (taskText === "") return;

const li = document.createElement("li");
const span = document.createElement("span");
span.textContent = taskText;

const deleteBtn = document.createElement("button");
deleteBtn.textContent = "×";
deleteBtn.onclick = () => li.remove();

li.appendChild(span);
li.appendChild(deleteBtn);
list.appendChild(li);

taskInput.value = "";
});
});
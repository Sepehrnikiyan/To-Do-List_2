const toDoList = document.getElementById("todo-list");
const toDoInput = document.getElementById("todo-input");

document.addEventListener("DOMContentLoaded", function() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(function(task) {
        addTaskToDOM(task);
    });
});


function addToDo() {
    if (toDoInput.value === "") {
        alert("لطفاً یک کار اضافه کنید!");
    } else {
        addTaskToDOM(toDoInput.value);
        saveTaskToLocalStorage(toDoInput.value);
        toDoInput.value = "";
    }
}


function addTaskToDOM(taskText) {
    const toDoItem = document.createElement("li");
    toDoItem.textContent = taskText;


    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.onclick = function () {
        removeTask(taskText, toDoItem);
    };

    toDoItem.appendChild(deleteBtn);
    toDoList.appendChild(toDoItem);
}


function saveTaskToLocalStorage(taskText) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function removeTask(taskText, toDoItem) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    toDoItem.remove();
}
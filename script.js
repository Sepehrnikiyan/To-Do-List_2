const toDoList = document.getElementById("todo-list");
const toDoInput = document.getElementById("todo-input");

console.log("todo list" , toDoList);


document.addEventListener("DOMContentLoaded", function() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(function(task) {
        const toDoItem = document.createElement("li");
        toDoItem.textContent = task;
        toDoList.appendChild(toDoItem);
    });
});


function addToDo() {
    console.log("Add to do...")
    if (toDoInput.value === "") {
        console.log("Please add sth");
        alert("Please add sth");
    } else {
        const toDoItem = document.createElement("li");
        toDoItem.textContent = toDoInput.value;
        toDoList.appendChild(toDoItem);
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(toDoInput.value);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        toDoInput.value = "";
    }
}
const toDoList = document.getElementById("todo-list");
const toDoInput = document.getElementById("todo-input");

console.log("todo list" , toDoList);

function addToDo() {
    console.log("Add to do...")
    if (toDoInput.value === "") {
        console.log("Please add sth");
        alert("Please add sth");
    } else {
        const toDoItem = document.createElement("li");
        toDoItem.textContent = toDoInput.value;
        toDoList.appendChild(toDoItem);
        localStorage.setItem("to do item" , toDoInput.value);
        toDoInput.value = "";
    }
}
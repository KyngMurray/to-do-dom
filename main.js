const toDoForm = document.querySelector("#toDoForm");
const label = document.querySelector("#label");
const userInput = document.querySelector("#userInput");
const addButton = document.querySelector("#addButton");
const removeCompleteButton = document.querySelector("#removeCompleteButton");
const removeAllButton = document.querySelector("#removeAllButton");
const toDoList = document.querySelector("#toDoList");


toDoForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let inputValue = userInput.value;
    const newDiv = document.createElement("div");
    newDiv.innerHTML += inputValue;

    newDiv.addEventListener("click", function() {
        if (newDiv.style.textDecoration === "") {
            newDiv.style.textDecoration = "line-through";
        } else {
            newDiv.style.textDecoration = "";
        }
    });

    if (inputValue !== "") {
        toDoList.appendChild(newDiv);
    }

    toDoForm.reset();
})

removeCompleteButton.addEventListener("click", function() {
    const toDoList = document.querySelectorAll("#toDoList div");
    for (let i = 0; i < toDoList.length; i++) {
        const items = toDoList[i];
        if (items.style.textDecoration === "line-through") {
            items.remove();
        }
    }
})

removeAllButton.addEventListener("click", function() {
    const toDoList = document.querySelectorAll("#toDoList div");
    for (let i = 0; i < toDoList.length; i++) {
        const items = toDoList[i];
            items.remove();
    }
})

// ===================== STRETCH GOALS ==========================

const removeTaskButton = document.querySelector("#removeSingleTaskButton");
const editTaskButton = document.querySelector("#editTaskButton");

let editTask = false;
let removeTask = false;

removeTaskButton.addEventListener("click", function () {
    removeTask = true;
})

editTaskButton.addEventListener("click", function() {
    editTask = true;
})

toDoList.addEventListener("click", function (event) {
    if (removeTask === true) {
        event.target.remove();
        removeTask = false;
    }
    if (editTask === true) {
        const edit = prompt("Edit Your Task: ");
        event.target.innerHTML = edit;
        event.target.style.textDecoration = "";
        editTask = false;
    }
})
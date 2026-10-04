const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        const li = document.createElement("li");

        if (task.completed) {
            li.classList.add("completed");
        }

        const taskText = document.createElement("span");
        taskText.textContent = task.text;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");

        li.appendChild(taskText);
        li.appendChild(deleteButton);

        li.addEventListener("click", () => {
            task.completed = !task.completed;

            localStorage.setItem("tasks", JSON.stringify(tasks));

            displayTasks();
        });

        deleteButton.addEventListener("click", (event) => {
            event.stopPropagation();

            tasks.splice(index, 1);

            localStorage.setItem("tasks", JSON.stringify(tasks));

            displayTasks();
        });

        taskList.appendChild(li);
    });
}

addButton.addEventListener("click", () => {

    const text = taskInput.value.trim();

    if (text === "") {
        return;
    }

    tasks.push({
        text: text,
        completed: false
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskInput.value = "";

    displayTasks();
});

taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addButton.click();
    }
});

displayTasks();
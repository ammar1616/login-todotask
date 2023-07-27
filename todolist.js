document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("task-input");
    const addButton = document.getElementById("add-button");
    const tasksList = document.getElementById("tasks-list");

    addButton.addEventListener("click", function() {
        const taskName = taskInput.value.trim();
        if (taskName !== "") {
            addTask(taskName);
            taskInput.value = "";
        }
    });

    function addTask(taskName) {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskName;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", function() {
            deleteTask(taskItem);
        });

        const doneButton = document.createElement("button");
        doneButton.textContent = "Done";
        doneButton.classList.add("done-button");
        doneButton.addEventListener("click", function() {
            toggleDone(taskItem);
        });

        taskItem.appendChild(doneButton);
        taskItem.appendChild(deleteButton);
        tasksList.appendChild(taskItem);
    }

    function deleteTask(taskItem) {
        tasksList.removeChild(taskItem);
    }

    function toggleDone(taskItem) {
        taskItem.classList.toggle("done");
    }
});
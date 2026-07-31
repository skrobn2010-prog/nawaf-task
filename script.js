let totalTasks = 0;
let completedTasks = 0;

function addTask() {

    let input = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    let text = input.value.trim();

    if (text === "") {
        alert("اكتب المهمة أولاً");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = text;

    let doneBtn = document.createElement("button");
    doneBtn.textContent = "✔️";
    doneBtn.className = "done-btn";

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.className = "delete-btn";


    doneBtn.onclick = function () {

        if (!li.classList.contains("completed")) {

            li.classList.add("completed");
            completedTasks++;

            updateProgress();
        }

    };


    deleteBtn.onclick = function () {

        if (li.classList.contains("completed")) {
            completedTasks--;
        }

        totalTasks--;
        li.remove();

        updateProgress();

    };


    li.appendChild(span);
    li.appendChild(doneBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    totalTasks++;

    input.value = "";

    updateProgress();

}



function updateProgress() {

    let percent = 0;

    if (totalTasks > 0) {
        percent = Math.round((completedTasks / totalTasks) * 100);
    }

    document.getElementById("progress").textContent =
    "إنجاز المهام: " + percent + "%";

}
function saveTasks(tasks) {
    localStorage.setItem("myTasks", JSON.stringify(tasks));
}


function getTasks() {

    let tasks = localStorage.getItem("myTasks");

    if (tasks) {
        return JSON.parse(tasks);
    }

    return [];
}


function clearTasks() {

    localStorage.removeItem("myTasks");

}
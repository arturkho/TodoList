function removeTask(taskId, list) {
    console.log(list);
    let taskTableList = document.getElementsByTagName('li');
    list.tasks.forEach((task, index) => {
        if (task.taskId === taskId) {
            list.tasks.splice(index, 1)
        }
    });

    for (let i = 0; i < taskTableList.length; i++) {
        if (taskTableList[i] === document.querySelector(`#row${taskId}`)) {
            document.querySelector(`#row${taskId}`).remove()
        }
    }
    setToLocalStorage(list)
}
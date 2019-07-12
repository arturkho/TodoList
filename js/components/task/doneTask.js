function doneTask(taskId, tasksTables) {
    let taskRow = document.querySelector(`#row${taskId}`);

    tasksTables.forEach((tables) => {
        tables.tasks.forEach((task, index) => {
            if (task.taskId === taskId) {
                tables.tasks.splice(index, 1,
                    {
                        name: task.name,
                        taskId: taskId,
                        isReady: !task.isReady
                    });
                if (!task.isReady) {
                    taskRow.style = "text-decoration: line-through; color: gray";
                } else {
                    taskRow.style = "color: black";
                }
            }
        })
    });

    setToLocalStorage(tasksTables, taskId);
}
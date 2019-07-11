function doneTask(taskId, tasksTables) {
    let task = document.querySelector(`#row${taskId}`);
    for (let i = 0; i < tasksTables.length; i++) {
        for (let z = 0; z < tasksTables[i].table.length; z++) {
            if (tasksTables[i].table[z].taskId === taskId) {
                tasksTables[i].table.splice(z, 1,
                    {
                        name: tasksTables[i].table[z].name,
                        taskId: taskId,
                        isReady: !tasksTables[i].table[z].isReady
                    });
                if (tasksTables[i].table[z].isReady){
                    task.style = "text-decoration: line-through; color: gray";
                }else{
                    task.style = "color: black";
                }
            }
        }
    }
    setToLocalStorage(tasksTables, taskId);
}
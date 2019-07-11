function doneTask(taskId, tasksTables) {
    let task = document.querySelector(`#row${taskId}`);
    for (let i = 0; i < tasksTables.length; i++) {
        for (let z = 0; z < tasksTables[i].length; z++) {
            if (tasksTables[i][z].taskId === taskId) {
                tasksTables[i].splice(z, 1,
                    {
                        name: tasksTables[i][z].name,
                        taskId: taskId,
                        isReady: !tasksTables[i][z].isReady
                    });
                if (tasksTables[i][z].isReady){
                    task.style = "text-decoration: line-through; color: gray";
                }else{
                    task.style = "color: black";
                }
            }
        }
    }
    setToLocalStorage(tasksTables, taskId);
}
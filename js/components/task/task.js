function createItemInTable(appendTask, id, tasksTable) {
    let taskName = "error";
    appendTask.setAttribute('id', `row${id}`);
    tasksTable.forEach((task)=>{
        task.taskId === id ? taskName = task.name : taskName
    });
    appendTask.setAttribute('class', 'task');

    appendTask.innerHTML = `<p>${taskName}</p>`;
}
function createItemInTable(appendTask, id, tasksTable) {
    appendTask.setAttribute('class', "task");
    // appendTask.setAttribute('id', `row${id}${tableId}`);
    appendTask.innerHTML = `<p>${tasksTable[id].name}</p>`;
}
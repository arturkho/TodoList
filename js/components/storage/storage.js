function setToLocalStorage(tasksTable, taskId){
    // localStorage.removeItem(tasksTable[taskId].tableId);
    // localStorage.setItem(tasksTable[taskId].tableId, JSON.stringify(tasksTable))
}
function getTable(tableId) {
    return  localStorage.getItem(tableId) ? localStorage.getItem(tableId) : [];
}
function createTable(tasksTables, selectedTableId) {
    tasksTables.push([]);
    selectedTableId = tasksTables.length - 1;
    localStorage.setItem(selectedTableId, JSON.stringify([]));
    let tableWrap = document.querySelector('#taskTablesWrap');
    tableWrap.appendChild(document.createElement('ul')).setAttribute('id', `ul${tasksTables.length - 1}`);
}
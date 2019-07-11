function createTable(tasksTables) {
    if (tasksTables !== [[]]) {
        tasksTables.push([]);
    }
    selectedTableId = tasksTables.length - 1;
    localStorage.setItem('tables', JSON.stringify(tasksTables));
    let tableWrap = document.querySelector('#taskTablesWrap');
    let table = tableWrap.appendChild(document.createElement('ul'));
    table.setAttribute('id', `ul${tasksTables.length - 1}`);
    table.setAttribute('class', `table`);
    selectTable(selectedTableId);
}
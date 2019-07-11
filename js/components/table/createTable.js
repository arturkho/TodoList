function createTable(tasksTables) {
    if (tasksTables !== [[]]) {
        tasksTables.push([]);
    }
    localStorage.setItem('tables', JSON.stringify(tasksTables));

    let tableWrap = document.querySelector('#taskTablesWrap');
    let table = tableWrap.appendChild(document.createElement('ul'));
    table.setAttribute('id', `ul${tasksTables.length - 1}`);
    table.setAttribute('class', `table`);

    let allTables = document.querySelectorAll('.table');
    for (let i = 0; i < allTables.length; i++) {
        allTables[i].addEventListener('click', () => {
            selectedTableId = i;
            selectTable(selectedTableId);
        });
    }
}
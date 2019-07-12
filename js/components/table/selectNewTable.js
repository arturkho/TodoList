function selectNewTable(tasksTables, tableName, tableId) {
    document.querySelector('#taskInput').style = "display: flex";
    if (tasksTables !== [{}]) {
        tasksTables.push({tableName: tableName, tableId: tableId, table: []});
    }
    setToLocalStorage(tasksTables);

    let allTables = document.querySelectorAll('.table');

    allTables.forEach((table) => {
        table.addEventListener('click', () => {
            selectedTableId = table.id;
            selectTable(table.id);
        });
    })
}
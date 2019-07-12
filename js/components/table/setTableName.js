function setTableName(tasksTables, tableName, tableId) {
    let tableNameLi = document.createElement('li');
    tableNameLi.setAttribute('id', `li${tasksTables.length}`);

    tableNameLi.innerHTML = tableName === "" ? "No name" : `Table: ${tableName}`;
    tableNameLi.style.display = "flex";

    let tableWrap = document.getElementById('taskTablesWrap');
    let table = tableWrap.appendChild(document.createElement('ul'));

    table.setAttribute('id', tableId);
    table.setAttribute('class', `table`);
    table.appendChild(tableNameLi);
}
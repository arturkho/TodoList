function createTable(tasksTables){
    let inputsWrap = document.querySelector('#inputsWrap');
    let changeInput = inputsWrap.appendChild(document.createElement('input'));
    changeInput.setAttribute('id', `taskNameInput`);

    let addTable = document.querySelector('#addList');
    addTable.disabled = true;
    let acceptChanges = inputsWrap.appendChild(document.createElement('input'));
    acceptChanges.type = 'button';
    acceptChanges.value = 'ok';
    acceptChanges.setAttribute('id', `setTaskName`);

    document.querySelector(`#setTaskName`).addEventListener('click', () => {
        addTable.disabled = false;
        let tableName = document.querySelector(`#taskNameInput`).value;
        acceptChanges.remove();
        changeInput.remove();
        setTableName(tasksTables, tableName);
        addTaskInNewTable(tasksTables, tableName)
    })
}

function addTaskInNewTable(tasksTables, tableName){
    document.querySelector('#taskInput').style = "display: flex";
    if (tasksTables !== [{}]) {
        tasksTables.push({tableName: tableName, table: []});
    }
    localStorage.setItem('tables', JSON.stringify(tasksTables));

    let allTables = document.querySelectorAll('.table');
    for (let i = 0; i < allTables.length; i++) {
        allTables[i].addEventListener('click', () => {
            selectedTableId = i;
            selectTable(selectedTableId);
        });
    }
}

function setTableName(tasksTables, tableName){
    let tableWrap = document.querySelector('#taskTablesWrap');
    let table = tableWrap.appendChild(document.createElement('ul'));
    table.setAttribute('id', `ul${tasksTables.length - 1}`);
    table.setAttribute('class', `table`);

    let createTaskHeader = table.appendChild(document.createElement('li'));
    createTaskHeader.setAttribute('id', `li${tasksTables.length}`);
    let taskHeader = document.querySelector(`#li${tasksTables.length}`);

    taskHeader.innerHTML = tableName === "" ? "No name" : `Table: ${tableName}`;
    taskHeader.style = "display: flex";
}
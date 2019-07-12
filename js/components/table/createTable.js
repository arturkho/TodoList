function createTable(tasksTables) {
    let inputsWrap = document.querySelector('#inputsWrap');
    let changeInput = inputsWrap.appendChild(document.createElement('input'));
    let tableId = '_' + Math.random().toString(36).substr(2, 9);
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
        setTableName(tasksTables, tableName, tableId);
        selectNewTable(tasksTables, tableName, tableId)
    })
}
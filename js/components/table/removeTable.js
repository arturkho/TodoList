function removeTable(tasksTable){
    tasksTable.splice(selectedTableId, 1);
    setToLocalStorage(tasksTable);

    let tableWrap = document.querySelector('#taskTablesWrap');
    tableWrap.removeChild(document.querySelector(`#ul${selectedTableId}`))
}
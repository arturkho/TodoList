function removeTable(tasksTable){
    console.log('taskID', selectedTableId);
    tasksTable.forEach((tables, index)=>{
        if(tables.tableId === selectedTableId){
            tasksTable.splice(index, 1);
        }
    });
    setToLocalStorage(tasksTable);

    let tableWrap = document.querySelector('#taskTablesWrap');
    tableWrap.removeChild(document.querySelector(`#${selectedTableId}`))
}
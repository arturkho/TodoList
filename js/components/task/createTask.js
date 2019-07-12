function createTask(tasksTables) {
  let inputValue = document.querySelector('#taskInput').value;
  let taskId = '_' + Math.random().toString(36).substr(2, 9);

  if (inputValue !== undefined && inputValue !== "") {
    let taskTableList = document.querySelector(`#${selectedTableId}`);

    let appendTask = taskTableList.appendChild(document.createElement('li'));
    taskTableList.style = 'list-style: none';

    tasksTables.forEach((tables)=>{
      if (tables.tableId === selectedTableId){
        tables.table.push({name: inputValue, taskId: taskId});
        createItemInTable(appendTask, taskId, tables.table);
      }
    });


    createButtonsInTable(appendTask, taskId, tasksTables);
    document.querySelector('#taskInput').value = "";
    setToLocalStorage(tasksTables, taskId);
  }
}
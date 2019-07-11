function createTask(tasksTables) {
  let inputValue = document.querySelector('#taskInput').value;
  let taskId = '_' + Math.random().toString(36).substr(2, 9);

  if (inputValue !== undefined && inputValue !== "") {
    tasksTables[selectedTableId].push({name: inputValue, taskId: taskId});
    let taskTableList = document.querySelector(`#ul${selectedTableId}`);

    let appendTask = taskTableList.appendChild(document.createElement('li'));
    taskTableList.style = 'list-style: none';

    createItemInTable(appendTask, taskId, tasksTables[selectedTableId]);
    createButtonsInTable(appendTask, taskId, tasksTables);
    document.querySelector('#taskInput').value = "";
    setToLocalStorage(tasksTables, taskId);
  }
}
function changeTask(taskId, tasksTables) {
  let row = document.querySelector(`#row${taskId}`);
  let changeButton = document.querySelector(`#changeButton${taskId}`);
  changeButton.disabled = true;

  let changeInput = row.appendChild(document.createElement('input'));
  changeInput.setAttribute('id', `changeInput${taskId}`);

  let acceptChanges = row.appendChild(document.createElement('input'));
  acceptChanges.type = 'button';
  acceptChanges.value = 'ok';
  acceptChanges.setAttribute('id', `ok${taskId}`);

  document.querySelector(`#ok${taskId}`).addEventListener('click', () => {
    changeButton.disabled = false;
    let changeValue = document.querySelector(`#changeInput${taskId}`).value;
    document.querySelector(`#row${taskId}`).getElementsByTagName('p')[0].innerHTML = changeValue;

    tasksTables.forEach((tables)=>{
      tables.table.forEach((task, index)=>{
        if(task.taskId === taskId){
          tables.table.splice(index, 1, {name: changeValue, taskId: taskId, isReady: task.isReady})
        }
      })
    });

    acceptChanges.remove();
    changeInput.remove();
    setToLocalStorage(tasksTables)
  });
}
function removeTask(taskId, tasks) {
  let taskTableList = document.getElementsByTagName('li');
  tasks.forEach((tables)=>{
    tables.table.forEach((task, index)=>{
      if(task.taskId === taskId){
        tables.table.splice(index, 1)
      }
    })
  });

  for (let i = 0; i < taskTableList.length; i++) {
    if (taskTableList[i] === document.querySelector(`#row${taskId}`)) {
      document.querySelector(`#row${taskId}`).remove()
    }
  }
  setToLocalStorage(tasks)
}
function removeTask(taskId, tasks) {
  let taskTableList = document.getElementsByTagName('li');
  for(let i = 0; i < tasks.length; i++){
    for (let z = 0; z < tasks[i].table.length; z++){
      if(tasks[i].table[z].taskId === taskId){
        tasks[i].table.splice(z, 1)
      }
    }
  }
  for (let i = 0; i < taskTableList.length; i++) {
    if (taskTableList[i] === document.querySelector(`#row${taskId}`)) {
      document.querySelector(`#row${taskId}`).remove()
    }
  }
  setToLocalStorage(tasks)
}
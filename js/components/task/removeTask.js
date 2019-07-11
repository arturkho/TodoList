function removeTask(taskId, tasks,) {
  let taskTableList = document.getElementsByTagName('li');
  
  for(let i = 0; i < tasks.length; i++){
    for (let z = 0; z < tasks[i].length; z++){
      if(tasks[i][z].taskId === taskId){
        tasks[i].splice(z, 1)
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
function setToLocalStorage(tasksTables){
  if(JSON.parse(localStorage.getItem('tables')) && JSON.parse(localStorage.getItem('tables')) !== []){
      localStorage.removeItem(tasksTables);
      localStorage.setItem('tables', JSON.stringify(tasksTables))
  }else{
      localStorage.setItem('tables', JSON.stringify(tasksTables))
  }
}
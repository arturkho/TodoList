function setToLocalStorage(tasksTables){
    localStorage.removeItem(tasksTables);
    localStorage.setItem('tables', JSON.stringify(tasksTables))
}
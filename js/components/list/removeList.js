function removeList(tasksList){
    tasksList.forEach((list, index)=>{
        if(list.listId === selectedListId){
            tasksList.splice(index, 1);
        }
    });
    setToLocalStorage(tasksList);

    let tableWrap = document.querySelector('#taskTablesWrap');
    tableWrap.removeChild(document.querySelector(`#${selectedListId}`))
}
function selectNewList(tasksLists, listName, listId) {
    document.querySelector('#taskInput').style = "display: flex";
    if (tasksLists !== [{}]) {
        tasksLists.push({listName: listName, listId: listId, tasks: []});
    }
    setToLocalStorage(tasksLists);

    let allLists = document.querySelectorAll('.table');

    allLists.forEach((list) => {
        list.addEventListener('click', () => {
            selectedListId = list.id;
            selectList(list.id);
        });
    })
}
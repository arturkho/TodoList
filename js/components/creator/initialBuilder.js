function initialBuilder(tasksLists) {
    tasksLists.forEach((list)=>{
        let listWrap = document.querySelector('#taskTablesWrap');
        let listItem = listWrap.appendChild(document.createElement('ul'));
        listItem.setAttribute('id', `${list.listId}`);
        listItem.setAttribute('class', `table`);
        let taskContainer = document.querySelector(`#${list.listId}`);
        createTableHeader(list, taskContainer);
        taskCreator(list, taskContainer)
    });
    selectList()
}

function createTableHeader(list, taskContainer){
    let createTaskHeader = taskContainer.appendChild(document.createElement('li'));
    createTaskHeader.setAttribute('id', `li${list.listName}`);
    let taskHeader = document.querySelector(`#li${list.listName}`);
    taskHeader.style = "display: flex; font-size: 18; font-style: bold";
    taskHeader.innerHTML =`Table: ${list.listName}`
}

function taskCreator(list, taskContainer){
    console.log(list)
    list.tasks.forEach((task)=>{
        let appendTask = taskContainer.appendChild(document.createElement('li'));
        taskContainer.style = 'list-style: none';

        createItemInTable(appendTask, task.taskId, list.tasks);
        createButtonsInTable(appendTask, task.taskId, list);

        let taskItem = document.querySelector(`#row${task.taskId}`);
        if (task.isReady) {
            taskItem.style = "text-decoration: line-through; color: gray"
        } else {
            taskItem.style = "color: black";
        }
    })
}

function selectList(){
    let allLists = document.querySelectorAll('.table');
    for (let i = 0; i < allLists.length; i++) {
        allLists[i].addEventListener('click', () => {
            selectedListId = allLists[i].id;
            selectList(selectedListId);
        });
    }
}
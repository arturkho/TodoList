function initialBuilder(tasksTables) {
    for (let i = 0; i < tasksTables.length; i++) {
        let tableWrap = document.querySelector('#taskTablesWrap');
        let table = tableWrap.appendChild(document.createElement('ul'));
        table.setAttribute('id', `ul${i}`);
        table.setAttribute('class', `table`);
        let taskTableList = document.querySelector(`#ul${i}`);
        createTableHeader(taskTableList, tasksTables, i);
        createTask(tasksTables, i, taskTableList)
    }
    selectList()
}

function createTableHeader(taskTableList, tasksTables, index){
    let createTaskHeader = taskTableList.appendChild(document.createElement('li'));
    createTaskHeader.setAttribute('id', `li${tasksTables[index].tableName}`);
    let taskHeader = document.querySelector(`#li${tasksTables[index].tableName}`);
    taskHeader.style = "display: flex; font-size: 18; font-style: bold";
    taskHeader.innerHTML =`Table: ${tasksTables[index].tableName}`
}

function createTask(tasksTables, i, taskTableList){
    for (let z = 0; z < tasksTables[i].table.length; z++) {
        let appendTask = taskTableList.appendChild(document.createElement('li'));
        taskTableList.style = 'list-style: none';
        createItemInTable(appendTask, tasksTables[i].table[z].taskId, tasksTables[i].table);
        createButtonsInTable(appendTask, tasksTables[i].table[z].taskId, tasksTables);

        let task = document.querySelector(`#row${tasksTables[i].table[z].taskId}`);
        if (tasksTables[i].table[z].isReady) {
            task.style = "text-decoration: line-through; color: gray"
        } else {
            task.style = "color: black";
        }
    }
}

function selectList(){
    let allTables = document.querySelectorAll('.table');
    for (let i = 0; i < allTables.length; i++) {
        allTables[i].addEventListener('click', () => {
            selectedTableId = i;
            selectTable(selectedTableId);
        });
    }
}
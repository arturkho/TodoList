let selectedTableId = 0;

document.querySelector('#addTaskButton').addEventListener('click', () => {
    createTask(getTable(selectedTableId), selectedTableId)
});

function createTask(tasksTable, selectedTableId) {
    let inputValue = document.querySelector('#taskInput').value;
    let taskId = '_' + Math.random().toString(36).substr(2, 9);

    if (inputValue !== undefined && inputValue !== "") {
        tasksTable.push({name: inputValue, taskId: taskId});

        let taskTableList = document.querySelector(`#ul${selectedTableId}`);

        let appendTask = taskTableList.appendChild(document.createElement('li'));
        taskTableList.style = 'list-style: none';

        createItemInTable(appendTask, taskId, tasksTable);
        createButtonsInTable(appendTask, taskId, tasksTable);
        document.querySelector('#taskInput').value = "";
        setToLocalStorage(tasksTable, taskId);
    }
}

let allTables = document.getElementsByTagName('ul');
for (let i = 0; i < allTables.length; i++ ){
    allTables[i].addEventListener('click', () => {
        selectedTableId = i;
        selectTable(selectedTableId)
    });
}
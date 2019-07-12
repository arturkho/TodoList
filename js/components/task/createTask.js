function createTask(tasksLists) {
    let inputValue = document.querySelector('#taskInput').value;
    let taskId = '_' + Math.random().toString(36).substr(2, 9);

    if (inputValue !== undefined && inputValue !== "" && inputValue.match(/^\s+$/) === null) {
        let taskTableList = document.querySelector(`#${selectedListId}`);

        let appendTask = taskTableList.appendChild(document.createElement('li'));
        taskTableList.style = 'list-style: none';

        tasksLists.forEach((tables) => {
            if (tables.listId === selectedListId) {
                tables.tasks.push({name: inputValue, taskId: taskId});
                createItemInTable(appendTask, taskId, tables.tasks);
            }
        });


        createButtonsInTable(appendTask, taskId, tasksLists);
        document.querySelector('#taskInput').value = "";
        setToLocalStorage(tasksLists, taskId);
    }
}
function initialBuilder(tasksTables) {
    for (let i = 0; i < tasksTables.length; i++) {
        let tableWrap = document.querySelector('#taskTablesWrap');
        let table = tableWrap.appendChild(document.createElement('ul'));
        table.setAttribute('id', `ul${i}`);
        table.setAttribute('class', `table`);
        let taskTableList = document.querySelector(`#ul${i}`);

        for (let z = 0; z < tasksTables[i].length; z++) {
            let appendTask = taskTableList.appendChild(document.createElement('li'));
            taskTableList.style = 'list-style: none';
            createItemInTable(appendTask, tasksTables[i][z].taskId, tasksTables[i]);
            createButtonsInTable(appendTask, tasksTables[i][z].taskId, tasksTables);

            let task = document.querySelector(`#row${tasksTables[i][z].taskId}`);
            if (tasksTables[i][z].isReady) {
                task.style = "text-decoration: line-through; color: gray"
            } else {
                task.style = "color: black";
            }
        }
    }

    let allTables = document.querySelectorAll('.table');
    for (let i = 0; i < allTables.length; i++) {
        allTables[i].addEventListener('click', () => {
            selectedTableId = i;
            selectTable(selectedTableId);
        });
    }
}
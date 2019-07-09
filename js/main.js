'use strict';

function init() {
    let table = [[]];
    document.querySelector('#addList').addEventListener('click', () => {
        createTable()
    });
    table.map((table, key) => {
        document.querySelector('#addTaskButton').addEventListener('click', () => {
            createTask(table, rebuildTable)
        });

        function createItemInTable(appendTask, id, table) {
            appendTask.setAttribute('class', "task");
            appendTask.setAttribute('id', `row${id}`);
            appendTask.innerHTML = `<p>${table[id]}</p>`;
        }

        function rebuildTable() {
            let table = document.querySelector('#taskTablesWrap');
            table.appendChild(document.createElement('ul')).setAttribute('id', `ul${key}`);
            let taskTable = document.querySelector(`#ul${key}`);
            taskTable.style = 'list-style: none';
            cleanArray(table);

            if (table.length > 0) {
                for (let i = 0; i < table.length; i++) {
                    let appendTask = taskTable.appendChild(document.createElement('li'));
                    createItemInTable(appendTask, i);
                    createButtonsInTable(appendTask, i, table, rebuildTable)
                }
            }
        }

        function cleanArray(taskList) {
            let allTasks = document.querySelectorAll('.task');
            for (let i = 0; i < allTasks.length; i++) {
                taskList.removeChild(allTasks[i])
            }
        }

        function selectTable() {
        }
    });

    function createTable() {
        let table = [];
        table.unshift(table)
    }
}

window.onload = init;

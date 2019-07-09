'use strict';

function init() {
    let tasks = [];
    document.querySelector('#addTaskButton').addEventListener('click', ()=>{createNewTask()});

    function createNewTask() {
        let inputValue = document.querySelector('#taskInput').value;
        if(inputValue !== undefined && inputValue !== ""){
            tasks.unshift(inputValue);
            rebuildList(tasks);
            document.querySelector('#taskInput').value = "";
        }
    }

    function createItemInList(appendTask, id){
        appendTask.setAttribute('class', "task");
        appendTask.setAttribute('id', `row${id}`);
        appendTask.innerHTML = `<p>${tasks[id]}</p>`;
    }


    function rebuildList() {
        let taskList = document.querySelector('#taskList');
        taskList.style = 'list-style: none';
        cleanArray(taskList);

        if (tasks.length > 0) {
            for (let i = 0; i < tasks.length; i++) {
                let appendTask = taskList.appendChild(document.createElement('li'));
                createItemInList(appendTask, i);
                createButtonsInList(appendTask, i)
            }
        }
    }

    function removeTask(taskId) {
        console.log("in remove tsk");
        tasks.splice(taskId, 1);
        rebuildList(tasks);
    }

    function createButtonsInList(appendTask, id){
        let deleteButton = appendTask.appendChild(document.createElement('input'));
        deleteButton.type = 'button';
        deleteButton.value = 'x';
        deleteButton.setAttribute('id', `d${id}`);
        document.querySelector(`#d${id}`).addEventListener('click', ()=>{removeTask(id)});

        let changeButton = appendTask.appendChild(document.createElement('input'));
        changeButton.type = 'button';
        changeButton.value = 'change';
        changeButton.setAttribute('id', `c${id}`);
        document.querySelector(`#c${id}`).addEventListener('click', ()=>{console.log(changeTask(id))})

        let isFinishedTask = appendTask.appendChild(document.createElement('input'));
        appendTask.appendChild(document.createElement('label')).innerHTML = 'is ready?';
        isFinishedTask.type = 'checkbox';
        isFinishedTask.setAttribute('id', `cb${id}`);
        // document.querySelector(`#c${id}`).addEventListener('click', ()=>{console.log(changeTask(id))})
    }

    function cleanArray(taskList){
        let allTasks = document.querySelectorAll('.task');
        for (let i = 0; i < allTasks.length; i++) {
            taskList.removeChild(allTasks[i])
        }
    }

    function changeTask(id){
        console.log("in change");
        let row = document.querySelector(`#row${id}`);
        let changeButton = document.querySelector(`#c${id}`);
        changeButton.disabled = true;

        let changInput = row.appendChild(document.createElement('input'));
        changInput.setAttribute('id', `ci${id}`);
        let acceptChanges = row.appendChild(document.createElement('input'));
        acceptChanges.type = 'button';
        acceptChanges.value = 'ok';
        acceptChanges.setAttribute('id', `ok${id}`);

        document.querySelector(`#ok${id}`).addEventListener('click', ()=>{
            changeButton.disable = false;
            let changeValue = document.querySelector(`#ci${id}`).value;
            tasks.splice(id, 1, changeValue);
            rebuildList()
        })
    }
}

window.onload = init;

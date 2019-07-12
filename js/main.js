'use strict';
let selectedListId = 0;
function init() {
    let tasksTables = [];
    localStorage.getItem('lists') ? tasksTables = JSON.parse(localStorage.getItem('lists')) : null;
    if(tasksTables !== [{}]){
        initialBuilder(tasksTables);
    }

    if(tasksTables.length === 0){
        document.querySelector('#taskInput').style = "display: none"
    }else{
        document.querySelector('#taskInput').style = "display: flex"
    }
    document.querySelector('#addList').addEventListener('click', () => {
        createList(tasksTables);
    });
    document.querySelector('#addTaskButton').addEventListener('click', () => {
        createTask(tasksTables);
    });
    document.querySelector('#deleteList').addEventListener('click', () => {
        removeList(tasksTables);
    });
}

window.onload = init;

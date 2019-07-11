'use strict';
let selectedTableId = 0;
function init() {
    let tasksTables = [];
    localStorage.getItem('tables') ? tasksTables = JSON.parse(localStorage.getItem('tables')) : null;
    if(tasksTables !== [[]]){
        initialBuilder(tasksTables);
    }
    document.querySelector('#addList').addEventListener('click', () => {
        createTable(tasksTables);
    });
    document.querySelector('#addTaskButton').addEventListener('click', () => {
        createTask(tasksTables);
    });
    document.querySelector('#deleteList').addEventListener('click', () => {
        removeTable(tasksTables);
    });
}

window.onload = init;

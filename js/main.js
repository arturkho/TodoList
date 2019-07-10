'use strict';

function init() {
    let tasksTables = [[]];

    localStorage.getItem('data') ? tasksTables = localStorage.getItem('data') : null;

    document.querySelector('#addList').addEventListener('click', () => {
        createTable(tasksTables, selectedTableId);
    });

}

window.onload = init;

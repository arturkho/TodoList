function createTask(tasksTable, rebuildList) {
    console.log("in create new tsas",tasksTable);
    let inputValue = document.querySelector('#taskInput').value;
    if(inputValue !== undefined && inputValue !== ""){
        tasksTable.unshift(inputValue);
        rebuildList(tasksTable);
        document.querySelector('#taskInput').value = "";
    }
}

function removeTask(taskId, tasks, rebuildList) {
    tasks.splice(taskId, 1);
    rebuildList(tasks);
}

function changeTask(taskId, tasks, rebuildList){
    let row = document.querySelector(`#row${taskId}`);
    let changeButton = document.querySelector(`#changeButton${taskId}`);
    changeButton.disabled = true;

    let changInput = row.appendChild(document.createElement('input'));
    changInput.setAttribute('id', `changInput${taskId}`);

    let acceptChanges = row.appendChild(document.createElement('input'));
    acceptChanges.type = 'button';
    acceptChanges.value = 'ok';
    acceptChanges.setAttribute('id', `ok${taskId}`);

    document.querySelector(`#ok${taskId}`).addEventListener('click', ()=>{
        changeButton.disable = false;
        let changeValue = document.querySelector(`#changInput${taskId}`).value;
        tasks.splice(taskId, 1, changeValue);
        rebuildList()
    })
}
function createList(tasksList) {
    let inputsWrap = document.querySelector('#inputsWrap');
    let changeInput = inputsWrap.appendChild(document.createElement('input'));
    let listId = '_' + Math.random().toString(36).substr(2, 9);
    changeInput.setAttribute('id', `taskNameInput`);

    let addList = document.querySelector('#addList');
    addList.disabled = true;
    let acceptChanges = inputsWrap.appendChild(document.createElement('input'));
    acceptChanges.type = 'button';
    acceptChanges.value = 'ok';
    acceptChanges.setAttribute('id', `setTaskName`);

    document.querySelector(`#setTaskName`).addEventListener('click', () => {
        addList.disabled = false;
        let listName = document.querySelector(`#taskNameInput`).value;
        acceptChanges.remove();
        changeInput.remove();
        if (listName !== undefined && listName !== "" && listName.match(/^\s+$/) === null) {
            setListName(tasksList, listName, listId);
            selectNewList(tasksList, listName, listId)
        }
    })
}
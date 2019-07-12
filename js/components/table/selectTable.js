function selectTable(tableId){
    let selectedTable = document.querySelector(`#${tableId}`);

    if(selectedTable !== null){
        selectedTable.addEventListener('click', ()=>{
            let allTables = document.querySelectorAll('.table');
            for (let i = 0; i < allTables.length; i++){
                allTables[i].style = "border: 2px ridge gray; cursor: pointer; list-style: none";
            }
            selectedTable.style = "border: 1px dotted black";
        })
    }
}

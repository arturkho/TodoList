
function selectTable(selectedTableId){
    console.log('selectedTableId', selectedTableId);
    let selectedTable = document.querySelector(`#ul${selectedTableId}`);
    if(selectedTable !== null){
        selectedTable.addEventListener('click', ()=>{
            let allTables = document.querySelectorAll('.table');
            for (let i = 0; i < allTables.length; i++){
                allTables[i].style = "border: none";
                allTables[i].style = "cursor: pointer";
                allTables[i].style = "list-style: none";
                allTables[i].style = "cursor: pointer";
            }
            selectedTable.style = "padding-bottom: 10px";
            selectedTable.style = "border: 1px dotted black";
        })
    }
}

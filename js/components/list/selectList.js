function selectList(selected){
    let selectedList = document.querySelector(`#${selected}`);

    if(selectedList !== null){
        selectedList.addEventListener('click', ()=>{
            let allTables = document.querySelectorAll('.table');
            for (let i = 0; i < allTables.length; i++){
                allTables[i].style = "border: 1px ridge #9ea0a3; cursor: pointer; list-style: none";
            }
            selectedList.style = "border: 1px solid #4287f5";
        })
    }
}

function manageEmployeeButton(){
    var para = document.createElement("button");
    var node = document.createTextNode("seeEmployees");
    para.appendChild(node);
    
    var element = document.getElementById("getUserName");
    element.appendChild(para);
    let mgmtBttn = document.querySelector(".workButton + button");

    mgmtBttn.classList.add("mgmtButton");
    mgmtBttn.addEventListener("click", showWorkPage);
}
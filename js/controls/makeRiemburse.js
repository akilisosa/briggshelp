function makeRiemburseButton(){
    console.log("riemburse works!");
    var para = document.createElement("button");
    var node = document.createTextNode("Make Riembursement");
    para.appendChild(node);
    
    var element = document.getElementById("getUserName");
    element.appendChild(para);
    let mgmtBttn = document.querySelector(".updateInfo + button");

    mgmtBttn.classList.add("makeRiemButton");
    mgmtBttn.addEventListener("click", showRiemburse);
}
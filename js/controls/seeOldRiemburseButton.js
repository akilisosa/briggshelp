function seeOldRiemburseButton(){
    console.log("riemburse works!");
    var para = document.createElement("button");
    var node = document.createTextNode("Riembursement Status");
    para.appendChild(node);
    
    var element = document.getElementById("getUserName");
    element.appendChild(para);
    let mgmtBttn = document.querySelector(".makeRiemButton + button");

    mgmtBttn.classList.add("seeRiemButton");
    mgmtBttn.addEventListener("click", showOldRiemburse);
} 
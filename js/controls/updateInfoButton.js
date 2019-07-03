function updateInfoButton(){
    var para = document.createElement("button");
    var node = document.createTextNode("update info");
    para.appendChild(node);
    
    var element = document.getElementById("getUserName");
    element.appendChild(para);
    infBtn = document.querySelector("#getUserName button");
    console.log(infBtn);
    infBtn.classList.add("updateInfo");
    infBtn.addEventListener("click", showInfoPage);
}
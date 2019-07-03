function workButton(){
    var para = document.createElement("button");
    var node = document.createTextNode("work");
    para.appendChild(node);
    
    var element = document.getElementById("getUserName");
    element.appendChild(para);
    workBtn = document.querySelector(".updateInfo + button");
    console.log(workBtn);
    workBtn.classList.add("workButton");
    workBtn.addEventListener("click", showWorkPage);
}

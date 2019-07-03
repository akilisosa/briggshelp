function introSequence(){
  let curtain = document.getElementById("blocker");
    curtain.classList.add("slideOutUp");
    setTimeout(myTimeout1, 2900);
    
    var url2 = "http://localhost:8090/aaa/";

    //var isAdmin = theresponse.isAdmin;
    //var userId = theresponse.userId;
    //load personal info
    //let userInfo = ajaxGET(url, userId);

    let preferedName= "akili";//userInfo.preferedName;

    function myTimeout1(){
   curtain.style.display = "none";
    }
    let main=document.getElementById("welcome");
    main.classList.add("colorfade");

    var para = document.createElement("p");
    var node = document.createTextNode("Hey " + preferedName);
    para.appendChild(node);

    var element = document.getElementById("getUserName");
    element.appendChild(para);
  

    let isAdmin=2;
      if (isAdmin==3){
        getAdminControls();
      }else {
        getUserControls();
      }
}
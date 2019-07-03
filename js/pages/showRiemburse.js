function showRiemburse(){
    console.log("show riembursement works!");
    //get all old stuff
    let cover = document.getElementById("getUserName");
    cover.classList.remove("fadeIn");
    cover.classList.add("fadeOutUp");

    setTimeout(doWork, 490);
    function doWork(){
    cover.classList.add("hide");
    }
    
    let back = document.getElementById("welcome");
    back.classList.remove("colorfade");
    back.classList.remove("colorfade3");
    back.classList.add("colorfade2");

    let main = document.getElementById("newMoney");
    main.classList.remove("hide");
    main.classList.remove("fadeOutDown");
    main.classList.add("fadeIn");
    //load this stuff
}
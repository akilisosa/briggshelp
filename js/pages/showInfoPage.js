function showInfoPage(){
    //why the fuck did you dothis
    console.log("this page is someting");
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

    //userInfo - this variable...


//
//    document.getElementsByName('prfname')[0].placeholder=userInfo.preferedName;
//    document.getElementsByName('lfname')[0].placeholder=userInfo.legalFirstName;
//    document.getElementsByName('llname')[0].placeholder=userInfo.legalLastName;
//    document.getElementsByName('street')[0].placeholder=userInfo.Street;
//    document.getElementsByName('city')[0].placeholder=userInfo.city;
//    document.getElementsByName('state')[0].placeholder=userInfo.State;
//    document.getElementsByName('zipCode')[0].placeholder=userInfo.zipCode;
//    document.getElementsByName('xNotes')[0].placeholder=userInfo.extraNotes;
//
    let main = document.getElementById("userInfo");
    main.classList.remove("hide");
    main.classList.remove("fadeOutDown");
    main.classList.add("fadeIn");

}
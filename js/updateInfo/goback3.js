function goBack3(){
    console.log("goBack works!");
    
    let backgroundChange = document.getElementById("welcome");
    backgroundChange.classList.remove("colorfade2");
    backgroundChange.classList.remove("colorfade");
    backgroundChange.classList.add("colorfade3");

    //change the background

    
    //hide the stuff
    let stuffToHide = document.getElementById("approveClaim");
    stuffToHide.classList.add("fadeOutDown");
    stuffToHide.classList.add("hide");

    //bring back the old stuff

    let oldStuff = document.getElementById("getUserName");
    oldStuff.classList.remove("hide");
    oldStuff.classList.remove("centerBitch");
    oldStuff.classList.remove("fadeOutUp");
    oldStuff.classList.remove("fadeOutDown");
    oldStuff.classList.add("fadeIn");

    oldStuff.classList.add("centerBitch");
}
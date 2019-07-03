function authorize(){
    var email=document.getElementById("email").value;
    var password = document.getElementById("pass").value;

    //make an ajax call.. 
    var url = "http://localhost:8090/aaa/login.do";
    var eh = "email="+ email + "&password=" +password ;
   // ajaxGET(url, eh).then(function(response){
   //     console.log(response);
   // });

 

     ajaxGET(url, eh).then(function (response) {
        console.log("Success!", response);
        userId = response;
      }, function(error) {
        console.error("Failed!", error);
        
      });
      
      console.log(userId);
 //    .then(response => {
        // Do something with the final result
 //       console.log(response);});








    
    //ssh -i "ec2NareshDemo.pem" ec2-user@ec2-54-86-152-216.compute-1.amazonaws.com

 
    
    //var idparams = from theresponse.isadmin;


    let userId = 1;
    if (userId==1){
        introSequence();

    }
    else{
     shakeItOff();
        document.getElementById("email").value="";
        document.getElementById("pass").value="";
     
    }
}
function addData(){

    var Name= document.getElementById("name").value
    var last= document.getElementById("lastName").value
    var email= document.getElementById("email").value;
    var user= document.getElementById("user").value
    var pass = document.getElementById("pass").value;
    var cPass = document.getElementById("cPass").value;
    
    
    localStorage.setItem("firstname",Name);
    localStorage.setItem("lastname",last);
    localStorage.setItem("usermail",email);
    localStorage.setItem("username",user);
    localStorage.setItem("userpwd",pass);
    localStorage.setItem("usercfpass",cPass);
    
    
    alert("REGISTRATION SUCCESSFULL");
    window.location.assign("signIn.html");
    
    }



function addData(){



    var mail=document.getElementById("input-box-1").value;
    var password=document.getElementById("input-box-2").value;

    var getEmail=localStorage.getItem("usermail");
    var getpass=localStorage.getItem("userpwd");


    if(mail===getEmail){
       
        if(password===getpass){
            alert("LOGIN SUCCESSFUL")
        }
        else{
            alert("ENTER WRONG PASSWORD/USERNAME")
        }
   
    }
     else{
        alert("NOT A MEMBER")
     }

     window.location.assign("index.html");



    }
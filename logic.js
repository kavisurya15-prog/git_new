
const storedEmail = "email@gmail.com";
const storedPassword = "12345";

function login(){
    const emailid=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    let result;
    if(emailid==storedEmail && password==storedPassword){
        result="login successfuly";
    }
    else{
        result="invalid id password"
    }
    document.getElementById("message").innerhtml=result; 
}
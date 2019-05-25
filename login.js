$('document').ready(function(){

let emaila = document.getElementById("email").value;
let pass = document.getElementById("pwd").value;

const users = [
    { email: "daniel@daniel.com", password: "daniel"},
    { email: "matt@matt.com", password: "matt"},
    { email: "zubby@zubby.com", password: "zubby"}
];

document.getElementById("submita").onclick = function Search(){
    

    users.forEach(function(loginDetails){
        if (loginDetails.email === emaila) {
            console.log("yes");
            alert("Welcome " + loginDetails.password);
            location.replace("index.html");
         
         } 
        else {
            console.log('No result found');
            alert("Your shopping details were not found. Please Signup!")
            //location.replace("signup.html")
    
        }
    });
  
}

});
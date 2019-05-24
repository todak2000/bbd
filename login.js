$('document').ready(function(){

let emaila = document.getElementById("email").value;
let pass = document.getElementById("pw").value;



document.getElementById("submita").onclick = function Search(){
    const users = [
        { email: "daniel@daniel.com", password: "daniel"},
        { email: "matt@matt.com", password: "matt"},
        { email: "zubby@zubby.com", password: "zubby"}
    ];

    const searchEmail = what => users.find(element => element.email === what);
  //const searchPassword = what => users.find(element => element.password === what);

    if (searchEmail(emaila)) {
        console.log("yes");
        alert("Welcome " + emaila);
        location.replace("index.html")
     
    } else {
        console.log('No result found');
        alert("Your shopping details were not found. Please Signup!")
        location.replace("signup.html")

    }
    
    //  var foundEmail = users.filter(obj=>obj.email===emaila);
    //  var foundEmailNot = users.filter(obj=>obj.email !== emaila);

  

    // if(foundEmail){ 
    //     console.log(foundEmail);
       
    //  } 
    // else if(foundEmailNot){
    //     console.log(emaila + " does not exists. Please register. Thanks!");
    //  }
}
//  $("#submita").click(function () {
//     search(email, pass, users);
// });
// function search(email, password, userArray) {
    
//     for (var i=0; i < users.length; i++) {
//         if (userArray[i].email === email && userArray[i].password === password) {
//             console.log(email + " and " + pass + " exists. Thanks");
//         }
//     }
// }







});
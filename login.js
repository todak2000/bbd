$('document').ready(function(){
    document.getElementById("submita").onclick = function validate() {
            var un = document.getElementById("email").value;
            var pw = document.getElementById("pwd").value;
            var valid = false;
            var fn = "";

            var unArray = ["daniel@daniel.com", "zubby@zubby.com", "matt@matt.com", "koby@koby.com"];
            var pwArray = ["daniel", "zubby", "matt", "koby"];
            var fnArray = ["Daniel Walters", "Zubby Goss", "Matt Cain", "Koby Dempsey"];

            for (var i=0; i <unArray.length; i++) {
                if ((un == unArray[i]) && (pw == pwArray[i])) {
                    valid = true;
                    fn = fnArray[i];
                    break;
                }
            }

            if (valid) {
                //alert ("Login was successful");
                console.log("yes");
                alert("Welcome " + fn);
                location.replace("index.html");
                // document.getElementById("mandatory1").value = un;
            }
            else {
                alert("Invalid Username and/or Password! Please try again!")
                document.getElementById("pwd").value = "";
                document.getElementById("email").value = "";
                document.getElementById("email").focus();
            }
    }

});
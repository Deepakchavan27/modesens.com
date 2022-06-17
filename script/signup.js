import { navbar } from "../components/navbar.js";

let navbar1 = document.getElementById("navbar");

navbar1.innerHTML = navbar();

import footer from "../components/footer.js";


document.getElementById("footer").innerHTML = footer();



var userData = JSON.parse(localStorage.getItem("userdata")) || [];

let signup = () =>{
    
    event.preventDefault();

    var userobj = {
        name : document.getElementById("email").value,
        password : document.getElementById("password").value,  
    };
    console.log(userobj);
    userData.push(userobj);
    alert("Sign Up successful")
    window.location.href = "login.html"
    localStorage.setItem("userdata", JSON.stringify(userData));
     
}
document.querySelector("form").addEventListener("submit",signup);
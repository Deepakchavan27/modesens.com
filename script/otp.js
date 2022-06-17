import { navbar } from "../components/navbar.js";

let navbar1 = document.getElementById("navbar");

navbar1.innerHTML = navbar();

import footer from "../components/footer.js";


document.getElementById("footer").innerHTML = footer();





document.querySelector("button").addEventListener("click",myotp);
    
function myotp () {
    var input = document.querySelector("#otpnumber").value
    event.preventDefault()
    if (input=="321")
     {
        alert("Payment Successfull")
        window.location.href= "index.html"
     }
     else {
        alert("OTP is Incorrect")
     }
}
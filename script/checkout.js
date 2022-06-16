import { navbar } from "../components/navbar.js";

let navbar1 = document.getElementById("navbar");

navbar1.innerHTML = navbar();

import footer from "../components/footer.js";

 document.getElementById("footer").innerHTML = footer();



 document.querySelector("form").addEventListener("submit",myfunc);
    function myfunc () {
        event.preventDefault()
        var num = document.querySelector("#card").value
        var cv = document.querySelector("#cvv").value
        var exp = document.querySelector("#expiry").value
        var name = document.querySelector("#name").value
        console.log(card,cv,exp,name)
        
        if (num=="1234567890" && cv== "789" && exp=="0001-01-01") {
            alert("OTP Sent to your registered mobile")
            window.location ="otp.html"

            // break;
        }
        if (num==""||cv==""||exp=="") {
            alert("Please fill full details")
        }
        else {
            if (num!=="1234567890") {
                alert("card number is Incorrect")
            }
            else if (cv!=="789") {
                alert("cvv number is Incorrect")
            }
            else if (exp!=="0001-01-01") {
                alert("exp number is Incorrect")
            }
        }

    }

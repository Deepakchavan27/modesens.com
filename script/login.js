import { navbar } from "../components/navbar.js";

let navbar1 = document.getElementById("navbar");

navbar1.innerHTML = navbar();

import footer from "../components/footer.js";


document.getElementById("footer").innerHTML = footer();




var regdUsers = JSON.parse(localStorage.getItem("userdata"));
// window.location.href = "index.html";
// alert("login success");
//console.log(regdUsers);

let loginFun = (e) => {
  e.preventDefault();

  let enteredEmail = document.getElementById("email").value;
  let enteredPassword = document.getElementById("password").value;
  //console.log(email);


  for (var i = 0; i < regdUsers.length; i++) {
    console.log(regdUsers[i]);
    console.log(enteredEmail,enteredPassword)
    if (
      regdUsers[i].email == enteredEmail && 
      regdUsers[i].password == enteredPassword
   
    ) {

      alert("login successful");
      
    } else {
      alert("login successful");
      window.location.href = "index.html";
    }
  }
};
document.getElementById("btn_login").addEventListener("click", loginFun);
import { navbar } from "../components/navbar.js";

let navbar1 = document.getElementById("navbar");

navbar1.innerHTML = navbar();

import footer from "../components/footer.js";


let footer1 = document.getElementById("footer").innerHTML = footer();

let cartData = JSON.parse(localStorage.getItem("add_to_bag")) || [];
console.log(cartData)

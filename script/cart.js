import { navbar } from "../components/navbar.js";

let navbar1 = document.getElementById("navbar");

navbar1.innerHTML = navbar();

import footer from "../components/footer.js";


let footer1 = document.getElementById("footer").innerHTML = footer();

let cartData = JSON.parse(localStorage.getItem("add_to_bag"));
// console.log(cartData)

let final = JSON.parse(localStorage.getItem("checkout")) || [];



let container = document.getElementById("container");
cartData.map((el,i) => {
    let div = document.createElement("div");
    div.setAttribute("id", "div")
    

    let nav = document.createElement("h6");
    nav.innerText = "MODESENS / DESIGNERS / BURBERRY / WOMEN /CLOTHING"

    let div_left = document.createElement("div");
    div_left.setAttribute("id", "div_left")

    let img = document.createElement("img");
    img.src = el.img_url;

    let div_lowerImg = document.createElement("div");
    div_lowerImg.setAttribute("id", "div_lowerImg")

    let photo = document.createElement("p");
    photo.innerText = "Photo: SSENSE";

    let p = document.createElement("p");
    p.innerText = "First seen in Feb 2020"

    let div_right = document.createElement("div");
    div_right.setAttribute("id", "div_right");

    let name = document.createElement("h4");
    name.innerText = el.name;

    let dis = document.createElement("p");
    dis.innerText = el.dis;
    dis.setAttribute("id", "dis")

    let div_price = document.createElement("p");
    div_price.setAttribute("id", "div_price");

    let price = document.createElement("h5");
    price.innerText = el.price;

    let size = document.createElement("p");
    size.innerText = "Set Alert"

    let div_size = document.createElement("div");
    div_size.setAttribute("id", "div_size")

    let store = document.createElement("p");
    store.innerText = "Shop From " + el.store;
    store.setAttribute("id", "store")

    let guide = document.createElement("p");
    guide.innerText = "Size Guide"
    guide.setAttribute("id", "guide")

    let earn = document.createElement("p");
    earn.innerText = `Earn up to ${Math.floor(Math.random() * 1000)} points from this purchase. Learn more`

    let btn = document.createElement("button");
    btn.innerText = `PROCEED TO CHECKOUT`;
    btn.setAttribute("id", "add_to_bag")
    btn.addEventListener("click", () => {
        checkout(el);
    });

    let remove = document.createElement("button");
    remove.innerText = "REMOVE";
    remove.setAttribute("id","remove")
    remove.addEventListener("click",()=>{
        removeProduct(el,i);
    })



    div_lowerImg.append(photo, p);
    div_left.append(img, div_lowerImg);
    div_price.append(price, size);
    div_size.append(store, guide)
    div_right.append(name, dis, div_price, div_size, earn, btn, remove)

    div.append(div_left, div_right)

    container.append(nav, div)
});

let checkout = (el) => {
    console.log(el)
    final.push(el);
    localStorage.setItem("checkout", JSON.stringify(final));
    window.location.href = "checkout.html"
}


let removeProduct = (el,i) =>{
    //console.log(el,i)
    cartData.splice(i,1);
    console.log(cartData)
    localStorage.setItem("add_to_bag", JSON.stringify(cartData));
    window.location.reload();
}


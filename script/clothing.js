import { navbar } from "../components/navbar.js";

let navbar1 = document.getElementById("navbar");

navbar1.innerHTML = navbar();

import footer from "../components/footer.js";


let footer1 = document.getElementById("footer").innerHTML = footer();


let womensData = [
    {
        img_url: "https://cdn.modesens.com/product/7298931_66?w=400&",
        name: "BURBERRY",
        dis: "Bbry Carrick Top Tee Cn Ss Chckd",
        price: "€277 - €511",
        store: "20 Stores",
    },
    {
        img_url: "https://cdn.modesens.com/product/41449769_2?w=400&",
        name: "JACQUEMUS",
        dis: "La Robe Lima Cutout Halter Neck Minidress In Pink",
        price: "€347 - €788",
        store: "19 Stores",
    },
    {
        img_url: "https://cdn.modesens.com/product/18444081_124?w=400&",
        name: "BURBERRY",
        dis: "+ Net Sustain Checked Poplin-trimmed Cotton-jersey T-",
        price: "€290 - €511",
        store: "15 Stores",
    },
    {
        img_url: "https://img.zolaprod.babsta.net/MyFjYVenpY6qxaxk5o8818o-0eg=/500x500/d5e511ebc766439dae869a7a60a126b9/product.JAC8M8THORA7AAA100.NBG",
        name: "JACQUEMUS",
        dis: "Bagnu Open-back Cotton-blend Terry Polo Shirt In Pink",
        price: "€199 - €376",
        store: "15 Stores",
    },
    {
        img_url: "https://cdn.modesens.com/static/img/prdimg.png",
        name: "BURBERRY",
        dis: "Zoe Vintage Check Asymmetrical Wool Kilt In Beige",
        price: "€575 - €1207",
        store: "15 Stores",
    },
    {
        img_url: "https://cdn.modesens.com/product/10741189_255?w=400&",
        name: "BURBERRY",
        dis: "Check Printed Stretch Lycra Bikini Set In Beige",
        price: "€277 - €552",
        store: "15 Stores",
    },
    {
        img_url: "https://cdn.modesens.com/availability/45629522?w=400&",
        name: "JACQUEMUS",
        dis: "Bahia Plunge-neck Tie-waist Shirt Dress In Orange",
        price: "€310 - €732",
        store: "14 Stores",
    },
    {
        img_url: "https://cdn-images.farfetch-contents.com/17/78/37/20/17783720_39317799_1000.jpg",
        name: "Crossover-strap Slim-fit Stretch-knit Mini Dress In Black",
        dis: "ALEXANDER MCQUEEN",
        price: "€855 - €1985",
        store: "14 Stores",
    },
    {
        img_url: "https://cdn.modesens.com/product/40615641_2?w=400&",
        name: "SAINT LAURENT",
        dis: "Université Oversize Cotton Logo Graphic Sweatshirt In Lilla",
        price: "€277 - €511",
        store: "15 Stores",
    },
    {
        img_url: "https://cdn.modesens.com/availability/44654025?w=400&",
        name: "Multicolored Monogram And Striped Pattern Sweater In Printed",
        dis: "VALENTINO",
        price: "€583 - €1840",
        store: "14 Stores",
    },
    {
        img_url: "https://res.cloudinary.com/ssenseweb/image/upload/b_white%2Cc_lpad%2Cg_center%2Ch_960%2Cw_960/c_scale%2Ch_680/f_auto%2Cdpr_1.0/211653F103011_1.jpg",
        name: "VERSACE",
        dis: "Barocco-print Scoop-neck Swimsuit In Gold",
        price: "€301 - €763",
        store: "17 Stores",
    },
    {
        img_url: "https://cdn.modesens.com/availability/40800697?w=400&",
        name: "BURBERRY",
        dis: "Womens Birch Brown Willah Checked Wool And Cashmere-",
        price: "€649 - €1207",
        store: "14 Stores",
    },
    {
        img_url: "https://cdn.modesens.com/product/27913853_27?w=400&",
        name: "BURBERRY",
        dis: "Archive Check Wool-blend Oversized Sweater In Multicolor",
        price: "€790 - €1104",
        store: "13 Stores",
    },
    {
        img_url: "https://www.modaoperandi.com/assets/images/products/879482/509779/large_jacquemus-neutral-hielo-dress.jpg?_t=1645471211",
        name: "JACQUEMUS",
        dis: "Hielo Cutout Draped Wool-blend Halterneck Mini Dress In",
        price: "€482 - €1048",
        store: "12 Stores",
    },
    {
        img_url: "https://img.zolaprod.babsta.net/MyFjYVenpY6qxaxk5o8818o-0eg=/500x500/d5e511ebc766439dae869a7a60a126b9/product.JAC8M8THORA7AAA100.NBG",
        name: "JACQUEMUS",
        dis: "Women's Bahia Gathered Crepe Mini Shirt Dress In Orange",
        price: "€310 - €732",
        store: "12 Stores",
    },
    {
        img_url: "https://img.ssensemedia.com/images/221259F052000_1/white-cocoon-sleeve-polyfaille-mini-dress.jpg",
        name: "ALEXANDER MCQUEEN",
        dis: "Cotton Shirt Dress With Balloon Sleeves - Atterley In White",
        price: "€733 - €1915",
        store: "13 Stores",
    },
    {
        img_url: "https://www.ganni.com/dw/image/v2/AAWT_PRD/on/demandware.static/-/Sites-ganni-master-catalogue/default/dwd37b207f/images/images/model/A4263-999-1.jpg?sh=740",
        name: "GANNI",
        dis: "Tie-side Crochet Organic-cotton Bikini Briefs In Printed",
        price: "€66 - €139",
        store: "12 Stores",
    },
    {
        img_url: "https://cdn.modesens.com/availability/48266264?w=400&",
        name: "JACQUEMUS",
        dis: "Le Haut Bebi Checked Cropped Woven Shirt In Blue",
        price: "€294 - €686",
        store: "12 Stores",
    },
    {
        img_url: "https://cdn-images.farfetch-contents.com/17/33/38/15/17333815_37725300_1000.jpg",
        name: "VERSACE",
        dis: "Logo-print Cotton Sweatshirt In Black",
        price: "€445 - €1220",
        store: "12 Stores",
    },
    {
        img_url: "https://www.ganni.com/dw/image/v2/AAWT_PRD/on/demandware.static/-/Sites-ganni-master-catalogue/default/dwc23fdc7b/images/images/model/F6920-506-1.jpg?sh=740",
        name: "GANNI",
        dis: "Chelsea-collar Striped Organic-cotton Poplin Shirt In Pink",
        price: "€97 - €360",
        store: "13 Stores",
    },
    {
        img_url: "https://cdn.modesens.com/product/21372265_31?w=400&",
        name: "BALMAIN",
        dis: "Black Short Buttoned Knit Cardigan",
        price: "€855 - €2259",
        store: "12 Stores",
    },
    {
        img_url: "https://cdn.modesens.com/availability/46300072?w=400&",
        name: "VERSACE",
        dis: "Black & White 'la Coupe Des Dieux' Leggings",
        price: "€461 - €1027",
        store: "12 Stores",
    },
    {
        img_url: "https://cdn.modesens.com/product/34019317_21?w=400&",
        name: "DOLCE & GABBANA",
        dis: "I Love Supermodel Printed Cotton T-shirt In White",
        price: "€221 - €572",
        store: "13 Stores",
    },
    {
        img_url: "https://res.cloudinary.com/ssenseweb/image/upload/b_white%2Cc_lpad%2Cg_center%2Ch_960%2Cw_960/c_scale%2Ch_680/f_auto%2Cdpr_1.0/211553F052002_1.jpg",
        name: "JACQUEMUS",
        dis: "Black La Montagne 'la Robe Bahia' Dress",
        price: "€310 - €835",
        store: "13 Stores",
    },
    {
        img_url: "https://cdn-images.farfetch-contents.com/15/35/98/55/15359855_27672676_1000.jpg",
        name: "PACO RABANNE",
        dis: "Black Logo Active Leggings",
        price: "€135 - €285",
        store: "13 Stores",
    },
    {
        img_url: "https://res.cloudinary.com/ssenseweb/image/upload/b_white%2Cc_lpad%2Cg_center%2Ch_960%2Cw_960/c_scale%2Ch_680/f_auto%2Cdpr_1.0/212251F111010_1.jpg",
        name: "BALMAIN",
        dis: "White & Gold Three-button Logo Tank Top",
        price: "€165 - €457",
        store: "13 Stores",
    },
    {
        img_url: "https://cdn.modesens.com/availability/47400391?w=400&",
        name: "DOLCE & GABBANA",
        dis: "Metallic Leopard-print Jacquard Mini Skirt In Natural Print",
        price: "€373 - €1162",
        store: "14 Stores",
    },
    {
        img_url: "https://cdn.modesens.com/product/32558257_8?w=400&",
        name: "BURBERRY",
        dis: "Stretch Fabric Shorts With Check Print - Atterley In Brown",
        price: "€315 - €678",
        store: "13 Stores",
    },
    {
        img_url: "https://cdn.modesens.com/product/19005314_48?w=400&",
        name: "BURBERRY",
        dis: "Audrey Check Side Stripe Stretch Cotton Shorts In Beige",
        price: "€335 - €535",
        store: "14 Stores",
    },
    {
        img_url: "https://assetsprx.matchesfashion.com/img/product/500/1475047_1.jpg",
        name: "ZIMMERMANN",
        dis: "Zimmerman Dancer Drawn Floral Long Sleeve Dress In",
        price: "€612 - €1012",
        store: "11 Stores",
    },
    {
        img_url: "https://cdn.modesens.com/product/37087242_4?w=400&",
        name: "BALMAIN",
        dis: "Short Tweed Dress With Double-buttoned Fastening In",
        price: "€1162 - €2837",
        store: "11 Stores",
    },
    {
        img_url: "https://res.cloudinary.com/ssenseweb/image/upload/b_white%2Cc_lpad%2Cg_center%2Ch_960%2Cw_960/c_scale%2Ch_680/f_auto%2Cdpr_1.0/211553F052001_1.jpg",
        name: "JACQUEMUS",
        dis: "Bahia Gathered Cotton Mini Dress In White",
        price: "€288 - €770",
        store: "12 Stores",
    },
    {
        img_url: "https://res.cloudinary.com/ssenseweb/image/upload/b_white%2Cc_lpad%2Cg_center%2Ch_960%2Cw_960/c_scale%2Ch_680/f_auto%2Cdpr_1.0/211376F110023_1.jpg",
        name: "BURBERRY",
        dis: "White 'horseferry' Carrick T-shirt",
        price: "€303 - €511",
        store: "11 Stores",
    },
    {
        img_url: "https://cdn.modesens.com/product/41434619?w=400&",
        name: "VERSACE",
        dis: "Cotton Sweatshirt With Frontal Logo - Atterley In Black",
        price: "€300 - €825",
        store: "11 Stores",
    },
    {
        img_url: "https://cdn.modesens.com/availability/44211642?w=400&",
        name: "BURBERRY",
        dis: "Exploded Check Wool Kilt Skirt With D-rings In Brown",
        price: "€719 - €1662",
        store: "11 Stores",
    },
    {
        img_url: "https://cdn.modesens.com/product/39099815_5?w=400&",
        name: "VERSACE",
        dis: "Baroque-print Racerback Sports Bra In Black",
        price: "€178 - €447",
        store: "12 Stores",
    },
    {
        img_url: "https://cdn.modesens.com/product/38634172_2?w=400&",
        name: "GANNI",
        dis: "Black Sparkle Knit Puff Sleeve Cardigan",
        price: "€215 - €421",
        store: "11 Stores",
    },
    {
        img_url: "https://cdn.modesens.com/product/37651903_9?w=400&",
        name: "BURBERRY",
        dis: "Bacton Lightweight Check Logo Jacket In Brown",
        price: "€990 - €1719",
        store: "12 Stores",
    },
    {
        img_url: "https://cdn.modesens.com/availability/45882864?w=400&",
        name: "Black Cropped Cotton T-shirt With Logo Print",
        dis: "€181 - €360",
        price: "€181 - €360",
        store: "11 Stores",
    },
    {
        img_url: "https://cdn.modesens.com/product/31157267_19?w=400&",
        name: "ALEXANDER MCQUEEN",
        dis: "White & Black Graffiti Logo Sweatshirt",
        price: "€258 - €620",
        store: "11 Stores",
    },
    {
        img_url: "https://img.ssensemedia.com/images/221259F110019_1/pink-off-the-shoulder-knit-top.jpg",
        name: "ALEXANDER MCQUEEN",
        dis: "Off-the-shoulder Stretch-knit Top In Pink & Purple",
        price: "€313 - €580",
        store: " Stores",
    },
];



let product_detail = [];

let container = document.getElementById("data");
womensData.forEach((el) => {
    let div = document.createElement("div");
    div.setAttribute("id", "div");
    div.addEventListener("click", () => {
        productPage(el);
    })

    let img = document.createElement("img");
    img.src = el.img_url;
    img.setAttribute("id", "img")

    let lower_div = document.createElement("div");
    lower_div.setAttribute("id", "lower_div")

    let name = document.createElement("h6");
    name.innerText = el.name;

    let dis = document.createElement("p");
    dis.innerText = el.dis;

    let price = document.createElement("p");
    price.innerText = el.price;

    let store = document.createElement("p");
    store.innerText = el.store;

    lower_div.append(name, dis, price, store)
    div.append(img, lower_div);
    container.append(div);
});


let productPage = (el) => {
    console.log(el)
    product_detail.push(el);
    localStorage.setItem("detail", JSON.stringify(product_detail));
    window.location.href = "productDetail.html"
}


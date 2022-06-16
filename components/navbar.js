let navbar = () => {
    return `
    <nav class="navbar navbar-expand-lg bg-light">
        <nav class="navbar bg-light">
            <div class="container">
                <a class="navbar-brand" href="index.html">
                    <img id="logo" src="https://cdn.modesens.com/static/img/20190228newlogo-black.svg" alt="logo"
                        width="150" height="24">
                </a>
            </div>
        </nav>
        <div class="container-fluid d-flex">
    
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown">
                        <a class="nav-link active dropdown-item" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            WOMEN
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">SHOP ALL</a></li>
                            <li><a class="dropdown-item" href="clothing.html">CLOTHING</a></li>
                            <li><a class="dropdown-item" href="#">BAGS</a></li>
                            <li><a class="dropdown-item" href="#">SHOES</a></li>
                            <li><a class="dropdown-item" href="#">ACCESSORIES</a></li>
                            <li><a class="dropdown-item" href="#">BEAUTY</a></li>
                            <li><a class="dropdown-item" href="#">SALE</a></li>
                            <li><a class="dropdown-item" href="#">OCCASION</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link active dropdown-item" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            MEN
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">SHOP ALL</a></li>
                            <li><a class="dropdown-item" href="clothing.html">CLOTHING</a></li>
                            <li><a class="dropdown-item" href="#">BAGS</a></li>
                            <li><a class="dropdown-item" href="#">SHOES</a></li>
                            <li><a class="dropdown-item" href="#">ACCESSORIES</a></li>
                            <li><a class="dropdown-item" href="#">GROOMING</a></li>
                            <li><a class="dropdown-item" href="#">SALE</a></li>
                            <li><a class="dropdown-item" href="#">OCCASION</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link active dropdown-item" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            BEAUTY
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">SHOP ALL</a></li>
                            <li><a class="dropdown-item" href="#">WOMEN'S BEAUTY</a></li>
                            <li><a class="dropdown-item" href="#">MEN'S GROOMING</a></li>
                            <li><a class="dropdown-item" href="#">KID'S CARE</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link active dropdown-item" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            KIDS
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">SHOP ALL</a></li>
                            <li><a class="dropdown-item" href="#">BABY GIRLS</a></li>
                            <li><a class="dropdown-item" href="#">BABY BOYS</a></li>
                            <li><a class="dropdown-item" href="#">GIRLS</a></li>
                            <li><a class="dropdown-item" href="#">BOYS</a></li>
                            <li><a class="dropdown-item" href="#">SALE</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link active dropdown-item" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            HOME
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link active dropdown-item" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            OFFERS
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">COUPONS</a></li>
                            <li><a class="dropdown-item" href="#">WOMEN'S SALE</a></li>
                            <li><a class="dropdown-item" href="#">MEN'S SALE</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link active dropdown-item" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            DESIGNERS
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link active dropdown-item href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            COMMUNITY
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link active dropdown-item" href="https://modesens.com/why-modesens/" id="navbarDropdown"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            WHY MODESENS
                        </a>
                    </li>
                </ul>


        
                <li class="nav dropdown">
                    <a class="nav-link active dropdown-item" href="../cart.html" id="navbarDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <a id="cartlogo" href="../cart.html"><img src="https://cdn.modesens.com/static/img/20200612shopping_bag2.svg" alt=""></a>
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <input type="text" name="" id="">
    
                    </ul>
                </li>

                


               
                
                <li class="nav dropdown">
                    <a class="nav-link active dropdown-item" href="#" id="navbarDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://cdn.modesens.com/static/img/20200612account_b2.svg" alt="">
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">My Likes</a></li>
                        <li><a class="dropdown-item" href="#">My Alerts</a></li>
                        <li><a class="dropdown-item" href="#">My Recently Viewed</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#">My Closer</a></li>
                        <li><a class="dropdown-item" href="#">My Orders</a></li>
                        <li><a class="dropdown-item" href="#">My Save Searches</a></li>
                        <li><a class="dropdown-item" href="#">My Loyalty</a></li>
                        <li><a class="dropdown-item" href="#">My Messages</a></li>
                        <li><a class="dropdown-item" href="#">Invite Friends</a></li>
                        <li><a class="dropdown-item" href="#">Setting</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#">Log In</a></li>
    
                    </ul>
                </li>


                <li class="nav dropdown">
                    <a class="nav-link active dropdown-item" href="#" id="navbarDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <img id="imglogo" src="data:image/png;base64,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" alt="">
                        <span id="span">SEARCH</span>
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <input type="text" name="" id="">
    
                    </ul>
                </li>
    
    
    
               
    
            </div>
        </div>
    </nav>

`
}

export { navbar };


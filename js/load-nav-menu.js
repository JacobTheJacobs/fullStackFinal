'use strict'

function loadNav() {
    // loads nav menu to current page


    let navMenu = `
        <div class="invert-color" id="invert-color">
            <i class="fad fa-repeat"></i>
            invert color
        </div>
        <i class="fas fa-bars" id="open-menu"></i>
        <i class="fas fa-times" id="close-menu"></i>
        <ul class="nav-list">
            <li class="nav-list-item"><a href="./index.html" class="nav-link"><span class="fas fa-home"></span> Home</a></li>
            <li class="nav-list-item"><a href="./spiral-gallery.html" class="nav-link"><span class="fal fa-solar-system"></span> Spiral</a></li>
            <li class="nav-list-item"><a href="./normal-gallery.html" class="nav-link"><span class="far fa-stars"></span> Normal</a></li>
            <li class="nav-list-item"><a href="./buy.html" class="nav-link"><span class="far fa-shopping-cart"></span> Buy</a></li>
        </ul>
    `
    
    // inserts nav menu inside nav element with id => nav-menu
    document.getElementById('nav-menu').insertAdjacentHTML('afterbegin', navMenu)
}

loadNav()
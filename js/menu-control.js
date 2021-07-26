'use strict'

let navMenu, openMenuBtn, closeMenuBtn;       // nav element and nav open/close buttons


function addListener() {
    // checks if nav menu elements loaded to document before setting click event
    // listeners on open and close menu buttons

    openMenuBtn = document.getElementById("open-menu");
    closeMenuBtn = document.getElementById("close-menu");
    navMenu = document.getElementById("nav-menu");

    if(openMenuBtn != null && closeMenuBtn != null && navMenu != null){
        openMenuBtn.addEventListener('click', changeNavPostion)
        closeMenuBtn.addEventListener('click', changeNavPostion)
    }else{
        setTimeout(addListener, 500)
    }
}

let s, o;   // look for comments in changeNavPosition function

function openMenu() {
    s.right = '0px'
    s.transition = '0.3s'
    o.opacity = '0'
    o.transition = '0.3s'
}

function closeMenu() {
    s.right = '-2000px'
    s.transition = '1s'
    o.opacity = '1'
    o.transition = '0.3s'
}

function changeNavPostion() {
    // for showing and hiding nav menu on mobile phones

    s = navMenu.style                  // shorter name to style nav menu
    o = openMenuBtn.style              // shorter name to style open button (menu hamburger)

    let rightPosition = getComputedStyle(navMenu).right     // get the position right property value in px
    let isOpen = rightPosition == '0px'    // if nav menu is open

    if(isOpen){
        closeMenu()
    }else{
        openMenu()
    }
}

// handle setting event listener for nav menu control
addListener()
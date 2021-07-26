'use strict';

// for every html filename set a corresponding number for nav link
const map = new Map();
map.set('index.html', 0);
map.set('spiral-gallery.html', 1);
map.set('normal-gallery.html', 2);
map.set('buy.html', 3);

// name of current page (like index.html)
const fileName = window.location.pathname.substring(1);

function highlightCurrentPageNavLink() {
    window.onload = () => {
        setTimeout(() => {
            // index/number of the link of current page
            let linkNum = map.get(fileName);

            // index.html doesn't show in location.pathname when entering
            // the website from a url example.com (try https://fullstack-y1s2-final.adam8replit.repl.co/)
            if (linkNum == undefined) {
                linkNum = 0;
            }

            // current page nav link element
            let currentPageNavLink =
                document.querySelectorAll('.nav-link')[linkNum];

            let s = currentPageNavLink.style; // shorter name to style nav-link

            s.background =
                'linear-gradient(40deg, var(--purple-very-light), var(--primary-color) 30%, var(--primary-dark-color) 70%)';
            s.borderTopLeftRadius = '80%';
            s.borderBottomRightRadius = '30%';
            s.transition = '1s';
        }, 100);
    };
}

// invert page color

let colorSwitch;
function addListener() {
    // checks if invert color button loaded to document before setting click event
    // listener to it
    colorSwitch = document.getElementById('invert-color');

    if (colorSwitch != null) {
        colorSwitch.addEventListener('click', invertColorOnClick);
    } else {
        setTimeout(addListener, 100);
    }
}

let gallery = document.getElementsByClassName('gallery')[0]; // select gallery if we are at a gallery page, we don't want to invert images color
let homeBgDiv = document.getElementById('bg-div');
let inverted = sessionStorage.getItem('inverted');
if (inverted == null) {
    // first time setting inverted in sessionStorage
    sessionStorage.setItem('inverted', 1); // save to access across all pages 1 => normal, 0 => inverted
}

function invertColorOnClick() {
    // onclick handler function, changes inverted value from 1 to 0, 0 to 1
    // and inverts color based on updated value

    sessionStorage.setItem('inverted', inverted == 0 ? 1 : 0);
    invertColor();
}

function invertColor() {
    // inverts the entire page based on inverted value saved in sessionStorage
    // and the values of the local variables invertGallery and invertHomeBg

    let invertGallery = false; // true => gallery images get inverted, false => not inverted
    let invertHomeBg = true; // true => homepage background elements get inverted, false => not inverted
    inverted = sessionStorage.getItem('inverted');

    if (inverted == 1) {
        document.documentElement.style.filter = 'invert(0%)';
        if (gallery && !invertGallery) {
            gallery.style.filter = 'invert(0%)'; // cancel invert on gallery images
        }
        if (homeBgDiv && !invertHomeBg) {
            homeBgDiv.style.filter = 'invert(0%)'; // cancel invert on homepage background image
        }
    } else {
        document.documentElement.style.filter = 'invert(100%)';
        if (gallery && !invertGallery) {
            gallery.style.filter = 'invert(100%)'; // cancel invert on gallery images
        }
        if (homeBgDiv && !invertHomeBg) {
            homeBgDiv.style.filter = 'invert(100%)'; // cancel invert on homepage background image
        }
    }
}

highlightCurrentPageNavLink();
addListener();
invertColor();

'use strict'

const jsDir = './js'
const cssDir = './css'
const place = document.head.getElementsByTagName('title')[0]  
  // element to insert before

  //nav menu
// add script to html head 
function addScriptLink(dir, name, defer=true) {
    let script = document.createElement('script')
    script.setAttribute('src',`${dir}/${name}`)
    script.defer = defer
    document.head.insertBefore(script, place)
}
// add css link to html head
function addLink(dir, name) {
    let link = document.createElement('link')
    link.setAttribute('href', `${dir}/${name}`)
    link.setAttribute('rel', 'stylesheet')
    document.head.insertBefore(link, place)
}

// add css
addLink(cssDir, 'all.css')
addLink(cssDir, 'normalize.css')

// add js
addScriptLink(jsDir, 'load-nav-menu.js')
addScriptLink(jsDir,'general.js')
addScriptLink(jsDir,'menu-control.js')

// add favicon
let favicon = document.createElement('link')
favicon.setAttribute('href','./images/favicon/galaxy-2.png')
favicon.setAttribute('type','image/png')
favicon.setAttribute('rel','icon');
document.head.insertBefore(favicon, place)



let $menuButton = document.querySelector(".menu-icon");
let $navlinks = document.querySelector(".nav-links");
let $menu = document.querySelector(".nav-links");

$menuButton.addEventListener("click", ()=>{

    $menu.classList.toggle("active");

})

$navlinks.addEventListener("click", ()=>{

    $menu.classList.toggle("active");

})


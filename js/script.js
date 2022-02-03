const iconServise = document.querySelector('.icon-servise');
const downlistServise = document.querySelector('.menu-downlist_servise');
const iconShop = document.querySelector('.icon-shop');
const downlistShop = document.querySelector('.menu-downlist_shop');
const menuCheckbox = document.querySelector('.menu_checkbox');
const navMenuBurger = document.querySelector('.nav-menu_burger');
const burgerIconServise = document.querySelector('.burger-icon-servise');
const burgerDownlistServise = document.querySelector('.burger-downlist_servise');
const burgerIconShop = document.querySelector('.burger-icon-shop');
const burgerDownlistShop = document.querySelector('.burger-downlist_shop');


iconServise.addEventListener('click', () => {       
    downlistServise.classList.toggle('menu-downlist_hidden')
})

iconShop.addEventListener('click', () => {       
    downlistShop.classList.toggle('menu-downlist_hidden')
})

burgerIconServise.addEventListener('click', () => {       
    burgerDownlistServise.classList.toggle('burger-downlist_block')
})

burgerIconShop.addEventListener('click', () => {       
    burgerDownlistShop.classList.toggle('burger-downlist_block')
})

menuCheckbox.addEventListener('click', () => {

    navMenuBurger.classList.toggle('nav-menu_burger')
    navMenuBurger.classList.toggle('nav-menu_burger-visible')
})


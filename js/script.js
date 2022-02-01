const iconServise = document.querySelector('.icon-servise');
const downlistServise = document.querySelector('.menu-downlist_servise');
const iconShop = document.querySelector('.icon-shop');
const downlistShop = document.querySelector('.menu-downlist_shop');
const form = document.querySelector('.form');


iconServise.addEventListener('click', () => {    
    downlistServise.classList.toggle('menu-downlist_hidden')
})

iconShop.addEventListener('click', () => {    
    downlistShop.classList.toggle('menu-downlist_hidden')
})




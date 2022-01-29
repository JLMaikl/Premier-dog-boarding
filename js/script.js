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

// form.addEventListener('click', (event) => {
//     event.preventDefault()
// })

const items = document.querySelectorAll('.gallery-info_item')
const itemsBold = document.querySelectorAll('.info-boldline')
const lineBottom = document.querySelector('.info-boldline_bottom')
const lineUp = document.querySelector('.info-boldline_top')
const infoPhotos = document.querySelectorAll('.gallery-info_photo')


items.forEach((item, i, a) => {
    item.addEventListener('click', () => {
        a.forEach(m => m.classList.toggle('info-item_bold', m === item)) 
        
        infoPhotos.forEach(infoPhoto => {

            // const infoPhotosRemove = () => {                
            //     infoPhoto.classList.remove('active')
            // }

            const infoPhotosAdd = () => { 
                
                if(infoPhoto.classList.contains('active')) {
                    infoPhoto.classList.remove('active')
                } else {
                    
                    infoPhoto.classList.add('active')
                }
            }

            if(item.classList.contains('info-item_one')) {
                lineBottom.classList.remove('info-boldline_move1', 'info-boldline_move2')
                lineBottom.classList.toggle('info-boldline_move')

                lineUp.classList.remove('info-boldline_move1', 'info-boldline_move2')
                lineUp.classList.toggle('info-boldline_move')

                infoPhotosRemove()
                infoPhotosAdd()
                
            }
            else if(item.classList.contains('info-item_two')) {
                lineBottom.classList.remove('info-boldline_move', 'info-boldline_move2')
                lineBottom.classList.toggle('info-boldline_move1')

                lineUp.classList.remove('info-boldline_move1', 'info-boldline_move2')
                lineUp.classList.add('info-boldline_move1')

                infoPhotosRemove()
                infoPhotosAdd()
            }
            else if(item.classList.contains('info-item_three')) {
                lineBottom.classList.remove('info-boldline_move', 'info-boldline_move1')
                lineBottom.classList.toggle('info-boldline_move2')

                lineUp.classList.remove('info-boldline_move1', 'info-boldline_move2')
                lineUp.classList.toggle('info-boldline_move2')

                infoPhotosRemove()
                infoPhotosAdd()
            }

            

        })
                
    })
})


    

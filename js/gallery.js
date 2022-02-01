const galleryScroll = () => {

    const items = document.querySelectorAll('.info_cursor');
    const itemPhoto = document.querySelector('.gallery-info_photo');
    const infoLine = document.querySelector('.info-boldline');

    const photosDog = [
        {
            image: './image/img1.png',
            boldLine: 'info-boldline_move'
        },
        {
            image: './image/img2.png',
            boldLine: 'info-boldline_move1'
        },
        {
            image: './image/img1.png',
            boldLine: 'info-boldline_move2'
        }
    ]

    const changeActivePhoto = (index) => {
        itemPhoto.setAttribute('src', photosDog[index].image)
    }

    const changeActiveLine = (indexClickedBut) => {
        items.forEach((item, index) => {

            infoLine.classList.remove(photosDog[index].boldLine);
            

            if(index === indexClickedBut) {
                infoLine.classList.add(photosDog[index].boldLine)
            }
        })
    }

    const changeActiveBut = (indexClickedBut) => {
        items.forEach((item, index) => {
            item.classList.remove('info-item_bold');

            if(index === indexClickedBut) {
                item.classList.add('info-item_bold')
            }
        })

        changeActivePhoto(indexClickedBut)
        changeActiveLine(indexClickedBut)
    }

    items.forEach((item, index) => {
        item.addEventListener('click', () => {
            changeActiveBut(index)
        })
    })


}

galleryScroll()
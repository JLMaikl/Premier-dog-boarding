const scrollStart = () => {

    const number = document.querySelector('.content-text_number')    
    let num = 0   
    
    const setNumber = () => {
        
        if (num > 5699) {
            number.innerHTML = '5,700+'
            clearInterval(intStart)
        } else {
            number.innerHTML = num
            num++ 
        }
    }

    let intStart = setInterval(setNumber, 1000)

    window.addEventListener('scroll', function() {

        if (pageYOffset > 3873) {
            intStart()
        }
    })  
    
}

    

scrollStart()
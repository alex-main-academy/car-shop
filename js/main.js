let header = document.querySelector('.header')
let secondContent = document.querySelector('.content__2')

let firstBlock = document.querySelector('.block__1')
let secondBlock = document.querySelector('.block__2')
let thirdBlock = document.querySelector('.block__3')
let fourthBlock = document.querySelector('.block__4')

let firstContTitle = document.querySelector('.content__1__title')

firstContTitle.style.opacity = '0'

firstBlock.style.opacity = '0'
secondBlock.style.opacity = '0'
thirdBlock.style.opacity = '0'
fourthBlock.style.opacity = '0'

secondContent.style = `
    opacity: 0;
    transform: translate(0, 100%)
`


setInterval(() => {
    if (document.documentElement.scrollTop > 1) {
        firstContTitle.style = `
            opacity: 1;
            transition-duration: 1s;
        `
        firstBlock.style = `
            opacity: 1;
            transition-duration: 1.5s;
        `
        secondBlock.style = `
            opacity: 1;
            transition-duration: 1.5s;
            transition-delay: 200ms;
        `
        thirdBlock.style = `
            opacity: 1;
            transition-duration: 1.5s;
            transition-delay: 400ms;
        `
        fourthBlock.style = `
            opacity: 1;
            transition-duration: 1.5s;
            transition-delay: 600ms;
        `
    }

    if (document.documentElement.scrollTop > header.clientHeight / 2) {
        secondContent.style = `
            opacity: 1;
            transition-duration: 1.5s;
            transition-delay: 1s;
            transform: translate(0, 0);
        `
    }

}, 100)



// top button

let topButton = document.querySelector('.top')

setInterval(() => {
    if (document.documentElement.scrollTop > header.clientHeight / 3) {
        topButton.style = `
            opacity: 1;
            transition-duration: 1s;
        `
    }else{
        topButton.style = `
            opacity: 0;
            transition-duration: 1s;
        `
    }
}, 100)

topButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
})
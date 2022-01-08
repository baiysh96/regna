const myBurger = document.querySelector('.burger')
const myMenu = document.querySelector('.menu')
const menuLinks = document.querySelectorAll('.menu-link')

myBurger.addEventListener('click', () =>{
    myBurger.classList.toggle('show-menu')
    document.body.classList.toggle('o-hidden')
})

myBurger.addEventListener('click', () =>{
    myMenu.classList.toggle('show')
    document.body.classList.toggle('o-hidden')
})

menuLinks.forEach( oneLink=> {
    oneLink.addEventListener('click', () => {
        myMenu.classList.remove('show-menu')
        myMenu.classList.remove('show')
        document.body.classList.toggle('o-hidden')
    })
})

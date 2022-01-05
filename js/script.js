const myBurger = document.querySelector('.burger')
const myMenu = document.querySelector('.menu')
const menuLinks = document.querySelectorAll('.menu-link')


myBurger.addEventListener('click', () =>{
    myMenu.classList.toggle('show')
})

menuLinks.forEach(oneLink => {
    oneLink.addEventListener('click', () => {
        myMenu.classList.remove('show')

    })
})



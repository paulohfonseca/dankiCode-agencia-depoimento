const btnMobile = document.getElementById('btnMobile')


function toggleMenu(event) {
    if(event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById('nav')
    const body = document.querySelector('body')

    nav.classList.toggle('active')
    body.classList.toggle('active')

}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)
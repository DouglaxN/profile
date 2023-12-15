// MOSTRAR E FECHAR MENU
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')
    // MOSTRAR MENU
    // VALIDANDDO SE OS CONSTS EXISTEM
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
// FECHAR O MENU
// VALIDANDO SE OS CONSTS EXISTEM
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
// REMOVER O MENU EM MOBILE
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
        // Quando clicarmos em cada nav_link, removeremos a classe do menu show
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
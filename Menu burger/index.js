let menu_burger = document.querySelector('.menu_hamburger')
let burger = document.querySelector('.hamburger')
burger.addEventListener('click',()=>{
    menu_burger.classList.toggle('show_nav')
})
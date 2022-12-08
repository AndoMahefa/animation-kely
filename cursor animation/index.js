// * listener des div qui suivent le curseur
const cursor = document.querySelectorAll(".cursor")
document.addEventListener("mousemove", (e) => {
    cursor[0].style.top = e.pageY - 10 + "px"
    cursor[0].style.left = e.pageX + 15 + "px"

    cursor[1].style.top = e.pageY - 50 + "px"
    cursor[1].style.left = e.pageX - 50 + "px"

    cursor[2].style.top = e.pageY - 40 + "px"
    cursor[2].style.left = e.pageX + 10 + "px"

    cursor[3].style.top = e.pageY + 5 + "px"
    cursor[3].style.left = e.pageX - 40 + "px"

    cursor[4].style.top = e.pageY + 30 + "px"
    cursor[4].style.left = e.pageX + 10 + "px"
})

// * listener du scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav')
    if(window.scrollY > 30) {
        navbar.classList.add('scroll')
    } else {
        navbar.classList.remove('scroll')
    }
})
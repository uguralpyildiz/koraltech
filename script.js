const menubtn = document.querySelector(".menu-btn")
const overlay = document.querySelector(".overlay")
const navlinks = document.querySelector(".nav-links")
const navlink = document.querySelectorAll(".nav-link a")
menubtn.addEventListener("click", ()=>{
    navlinks.style.left = "0%";
    overlay.style.display = "block"
})
overlay.addEventListener("click", ()=>{
    navlinks.style.left = "-150%";
    overlay.style.display = "none"
})
for (let i = 0; i < navlink.length; i++) {
    navlink[0].addEventListener("click", () => {
        navlinks.style.left = "-150%";
        overlay.style.display = "none"
    })
    navlink[1].addEventListener("click", () => {
        navlinks.style.left = "-150%";
        overlay.style.display = "none"
    })
    navlink[2].addEventListener("click", () => {
        navlinks.style.left = "-150%";
        overlay.style.display = "none"
    })
    navlink[3].addEventListener("click", () => {
        navlinks.style.left = "-150%";
        overlay.style.display = "none"
    })
    navlink[4].addEventListener("click", () => {
        navlinks.style.left = "-150%";
        overlay.style.display = "none"
    })
    
}


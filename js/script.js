
// transition du bouton parametre couleur sorti et entre
const paraCouleur = document.querySelector(".para");
paraCouleur.addEventListener("click",() =>{ 
document.querySelector(".theme-bar").classList.toggle("open")});

// transition du bouton se ferme quand on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".theme-bar").classList.contains("open")) {
        document.querySelector(".theme-bar").classList.remove("open");
    }
})
document.querySelector(".contenu").addEventListener("click",() => {
    if (document.querySelector(".theme-bar").classList.contains("open")) {
        document.querySelector(".theme-bar").classList.remove("open");
    }
})

// bouton nuit jour change quand le theme change
const nuitJour = document.querySelector(".nuit-jour");

nuitJour.addEventListener("click",() =>{
    if (document.body.classList.contains("dark")) {
        nuitJour.querySelector("i").classList.remove("fa-sun");
        nuitJour.querySelector("i").classList.add("fa-moon");
        document.body.classList.remove("dark");
        document.body.classList.add("light");

    } else if (document.body.classList.contains("light")) {
        nuitJour.querySelector("i").classList.remove("fa-moon");
        nuitJour.querySelector("i").classList.add("fa-sun");
        document.body.classList.remove("light");
        document.body.classList.add("dark");
       
    }
})



// changement de theme

const themeCouleur = document.querySelectorAll(".themeCouleur");
function setActive(couleur) {
    themeCouleur.forEach((style) => {
        if (couleur === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled","true");
        }
    } )
}

// const changeTheme = document.querySelector(".theme");
// const couleur1 = document.querySelector(".couleur1");
// const couleur2 = document.querySelector(".couleur2");
// const couleur3 = document.querySelector(".couleur3");
// const couleur4 = document.querySelector(".couleur4");

// couleur1.addEventListener("click", () =>{
//     document.documentElement.style.setProperty("--theme-color1-900", "rgb(255, 0, 0)" );
// })
// couleur2.addEventListener("click", () =>{
//     document.documentElement.style.setProperty("--theme-color1-900", "rgb(0, 165, 11)" );
// })
// couleur3.addEventListener("click", () =>{
//     document.documentElement.style.setProperty("--theme-color1-900", "rgb(0, 107, 247)" );
// })
// couleur4.addEventListener("click", () =>{
//     document.documentElement.style.setProperty("--theme-color1-900", "rgb(225, 124, 2)" );
// })




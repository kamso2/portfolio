
// transition du bouton parametre couleur sorti et entre
const paraCouleur = document.querySelector(".para");
paraCouleur.addEventListener("click",() =>{ 
document.querySelector(".theme-bar").classList.toggle("open")});

// transition du bouton se ferme quand on scroll et quand on click
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
var theme;

nuitJour.addEventListener("click",() =>{
    if (document.body.classList.contains("dark")) {
        nuitJour.querySelector("i").classList.remove("fa-sun");
        nuitJour.querySelector("i").classList.add("fa-moon");
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        theme = "light";

    } else if (document.body.classList.contains("light")) {
        nuitJour.querySelector("i").classList.remove("fa-moon");
        nuitJour.querySelector("i").classList.add("fa-sun");
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        theme = "dark";
       
    }
    localStorage.setItem("pageTheme", JSON.stringify(theme));
    
})

// pour sauvegarder les themes quand on change le mode dark/light
let getTheme = JSON.parse(localStorage.getItem("pageTheme"));

if (getTheme === "light") {
    document.body.classList = "light";
} else if (getTheme === "dark") {
    document.body.classList = "dark";
}


// changement de theme

const themeCouleur = document.querySelectorAll(".themeCouleur");
// var couleur;
function setActive(couleur) {
    themeCouleur.forEach((style) => {
        if (couleur === style.getAttribute("title")) {
            style.removeAttribute("disabled");    
        } else {
            style.setAttribute("disabled","true");    
        }
        localStorage.setItem("change", JSON.stringify(couleur));
    } )
}

// pour sauvegarder les theme quand on change de page
let getCouleur = JSON.parse(localStorage.getItem("change"));
console.log(getCouleur);
if (getCouleur === "couleur1") {
    document.querySelector(".C1").removeAttribute("disabled");
}else if (getCouleur === "couleur2") {
    document.querySelector(".C2").removeAttribute("disabled");
}else if (getCouleur === "couleur3") {
    document.querySelector(".C3").removeAttribute("disabled");
}else if (getCouleur === "couleur4") {
    document.querySelector(".C4").removeAttribute("disabled");
}
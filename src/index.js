// src/index.js
import "./styles.css";
import loadHome from "./pages/home.js"

const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const aboutButton = document.querySelector(".about")
const contactButton = document.querySelector(".contact")
const content = document.querySelector(".content");

homeButton.addEventListener("click",() =>{
    clearContent();
    loadHome();
});

menuButton.addEventListener("click", () =>{
    clearContent();
})

aboutButton.addEventListener("click", () =>{
    clearContent();
})

contactButton.addEventListener("click", () =>{
    clearContent();
})

function clearContent () {
    content.textContent="";
}

loadHome();
console.log(greeting);

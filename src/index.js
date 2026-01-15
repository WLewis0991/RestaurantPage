// src/index.js
import "./styles.css";
import loadHome from "./pages/home.js"

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const aboutButton = document.getElementById("about")
const contactButton = document.getElementById("contact")
const content = document.getElementById("content");

loadHome();

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

console.log(greeting);

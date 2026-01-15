// src/index.js
import "./styles.css";
import loadHome from "./pages/home.js";
import {loadMenu} from "./pages/menu.js";
import { loadAbout } from "./pages/about.js"; 
import { loadContact } from "./pages/contact.js";


const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const aboutButton = document.getElementById("about")
const contactButton = document.getElementById("contact")
const content = document.getElementById("content");



homeButton.addEventListener("click",() =>{
    content.textContent="";
    loadHome();
});

menuButton.addEventListener("click", () =>{
    content.textContent="";
    loadMenu();
})

aboutButton.addEventListener("click", () =>{
    clearContent();
    loadAbout();
})

contactButton.addEventListener("click", () =>{
    clearContent();
    loadContact();
})


function clearContent() {
    content.textContent="";
}

loadHome();
console.log(greeting);

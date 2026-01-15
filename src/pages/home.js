// Home Page


export default function loadhome () {
    const content = document.querySelector(".content");
    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent="Ravioli's";

    content.appendChild(title);
}
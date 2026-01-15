// Home Page


export default function loadhome () {
    const content = document.getElementById("content");
    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent="Ravioli's";

    content.appendChild(title);
}
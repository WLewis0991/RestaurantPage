//Menu Page

export function loadMenu() {
        const br = document.createElement("br");

    const content =document.getElementById("content");
    const menu = document.createElement("div");
    menu.id="menuPage";
    
    const starters = document.createElement("h1");
    starters.classList.add("underLine");
    starters.textContent= "Starters";
    menu.appendChild(starters);

    menu.appendChild(br)
    
    const s1 = document.createElement ("h3");
    s1.textContent = "Burrata con Pomodorini"
    const s1d = document.createElement ("p");
    s1d.textContent = "Fresh burrata served with marinated cherry tomatoes, basil, extra-virgin olive oil, and a touch of sea salt. Creamy, bright, and simple in the best Italian way."
    menu.append(s1, s1d, br)

    const s2 = document.createElement ("h3");
    s2.textContent = "Burrata con Pomodorini"
    const s2d = document.createElement ("p");
    s2d.textContent = "Fresh burrata served with marinated cherry tomatoes, basil, extra-virgin olive oil, and a touch of sea salt. Creamy, bright, and simple in the best Italian way."
    menu.append(s2, s2d, br)

    const s3 = document.createElement ("h3");
    s3.textContent = "Burrata con Pomodorini"
    const s3d = document.createElement ("p");
    s3d.textContent = "Fresh burrata served with marinated cherry tomatoes, basil, extra-virgin olive oil, and a touch of sea salt. Creamy, bright, and simple in the best Italian way."
    menu.append(s3, s3d, br)

    const s4 = document.createElement ("h3");
    s4.textContent = "Burrata con Pomodorini"
    const s4d = document.createElement ("p");
    s4d.textContent = "Fresh burrata served with marinated cherry tomatoes, basil, extra-virgin olive oil, and a touch of sea salt. Creamy, bright, and simple in the best Italian way."
    menu.append(s4, s4d, br)



    content.appendChild(menu)
}
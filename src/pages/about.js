

export function loadAbout () {
    const content = document.getElementById ("content");
    const about = document.createElement ("div");
    about.classList= "about";
    
    const info = document.createElement("p");
    info.classList = "aboutSection";
    info.textContent= "We approach Italian cooking with deep respect for tradition, refined through discipline, restraint, and a commitment to excellence. Our focus is on seasonality, precise technique, and balance—allowing simplicity to feel intentional and elevated. Each dish honors classic Italian flavors while presenting them with clarity and elegance, creating an experience that is timeless, thoughtful, and distinctly at home in the city."

    about.appendChild(info);
    content.appendChild(about);

}
//Menu Page

export function loadMenu() {

    const content =document.getElementById("content");
    const menu = document.createElement("div");
    menu.id="menuPage";
    
    const starters = document.createElement("h1");
    starters.classList.add("underLine");
    starters.textContent= "Starters";
    menu.appendChild(starters);
    const br = document.createElement("br");
    menu.appendChild(br);

    
    
    const s1 = document.createElement ("h3");
    s1.textContent = "Burrata con Pomodorini"
    const s1d = document.createElement ("p");
    s1d.textContent = "Fresh burrata served with marinated cherry tomatoes, basil, extra-virgin olive oil, and a touch of sea salt. Creamy, bright, and simple in the best Italian way."
    menu.append(s1, s1d)
    const br1 = document.createElement("br");
    menu.appendChild(br1);

    const s2 = document.createElement ("h3");
    s2.textContent = "Calamari Fritti"
    const s2d = document.createElement ("p");
    s2d.textContent = "Lightly breaded calamari, fried crisp and golden, finished with lemon and served with a house marinara and lemon-aioli for dipping."
    menu.append(s2, s2d)
    const br2 = document.createElement("br");
    menu.appendChild(br2);

    const s3 = document.createElement ("h3");
    s3.textContent = "Arancini al Ragu"
    const s3d = document.createElement ("p");
    s3d.textContent = "Crispy risotto balls filled with slow-cooked beef ragu and melted mozzarella, served over a warm tomato sauce and finished with Parmigiano-Reggiano."
    menu.append(s3, s3d)
    const br3 = document.createElement("br");
    menu.appendChild(br3);

    const s4 = document.createElement ("h3");
    s4.textContent = "Prosciutto e Melone"
    const s4d = document.createElement ("p");
    s4d.textContent = "Thinly sliced prosciutto paired with ripe seasonal melon, drizzled with olive oil and cracked black pepper for a sweet-salty classic."
    menu.append(s4, s4d)
    const br4 = document.createElement("br");
    menu.appendChild(br4);


    const mains = document.createElement("h1");
    mains.classList.add("underLine");
    mains.textContent= "Mains";
    menu.appendChild(mains);
    const br5 = document.createElement("br");
    menu.appendChild(br5);

    
    
    const d1 = document.createElement ("h3");
    d1.textContent = "Chicken Parmigiana"
    const d1d = document.createElement ("p");
    d1d.textContent = "Breaded chicken cutlet, pan-fried and baked with house marinara, melted mozzarella, and Parmigiano-Reggiano. Served with spaghetti or seasonal vegetables."
    menu.append(d1, d1d)
    const br6 = document.createElement("br");
    menu.appendChild(br6);

    const d2 = document.createElement ("h3");
    d2.textContent = "Spaghetti alla Carbonara"
    const d2d = document.createElement ("p");
    d2d.textContent = "Spaghetti tossed with crispy pancetta, egg yolk, black pepper, and Parmigiano-Reggiano for a rich, creamy sauce with no cream—traditional and comforting."
    menu.append(d2, d2d)
    const br7 = document.createElement("br");
    menu.appendChild(br7);

    const d3 = document.createElement ("h3");
    d3.textContent = "Penne alla Vodka"
    const d3d = document.createElement ("p");
    d3d.textContent = "Penne pasta in a silky tomato-cream sauce finished with vodka, garlic, and chili flakes. Optional grilled chicken or shrimp."
    menu.append(d3, d3d)
    const br8 = document.createElement("br");
    menu.appendChild(br8);

    const d4 = document.createElement ("h3");
    d4.textContent = "Osso Buco"
    const d4d = document.createElement ("p");
    d4d.textContent = "Braised veal shank slow-cooked with white wine, tomatoes, and aromatics, served with saffron risotto and finished with gremolata."
    menu.append(d4, d4d)
    const br9 = document.createElement("br");
    menu.appendChild(br9);

    const d5 = document.createElement ("h3");
    d5.textContent = "Eggplant Parmigiana"
    const d5d = document.createElement ("p");
    d5d.textContent = "Layers of breaded eggplant, marinara, mozzarella, and Parmigiano baked until bubbling and golden. Hearty, vegetarian, and always popular."
    menu.append(d5, d5d)
    const br10 = document.createElement("br");
    menu.appendChild(br10);

    const dessert = document.createElement("h1");
    dessert.classList.add("underLine");
    dessert.textContent= "Dessert";
    menu.appendChild(dessert);
    const br11 = document.createElement("br");
    menu.appendChild(br11);

    
    
    const f1 = document.createElement ("h3");
    f1.textContent = "Tiramisu"
    const f1d = document.createElement ("p");
    f1d.textContent = "Espresso-soaked ladyfingers layered with mascarpone cream and dusted with cocoa. Rich, light, and always a top seller."
    menu.append(f1, f1d)
    const br12 = document.createElement("br");
    menu.appendChild(br12);

    const f2 = document.createElement ("h3");
    f2.textContent = "Panna Cotta"
    const f2d = document.createElement ("p");
    f2d.textContent = "Silky vanilla custard served with a seasonal fruit coulis or caramel sauce. Simple, elegant, and not too heavy."
    menu.append(f2, f2d)
    const br13 = document.createElement("br");
    menu.appendChild(br13);

    const f3 = document.createElement ("h3");
    f3.textContent = "Cannoli"
    const f3d = document.createElement ("p");
    f3d.textContent = "Crisp pastry shells filled with sweet ricotta cream, finished with chocolate chips or pistachios and powdered sugar."
    menu.append(f3, f3d)
    const br14 = document.createElement("br");
    menu.appendChild(br14);


    content.appendChild(menu)
}
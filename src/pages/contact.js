

export function loadContact (){
    const content = document.getElementById("content")
    const contact = document.createElement ("div");
    contact.classList= "contactPage"

    content.appendChild(contact);
    
    const head = document.createElement("h1");
    head.textContent="Contact"
    head.classList="underLine";

    const tel = document.createElement("p");
    tel.textContent="Tel : 000-000-0000"

    const email = document.createElement("p")
    email.textContent= "Email : infor@raviolis.odinproject.com";

    const address = document.createElement("p");
    address.textContent = "Address : 000 Melrose Ave., Los Angeles, CA";

    contact.append(head, tel, email, address);
    
}
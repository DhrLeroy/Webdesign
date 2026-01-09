function A(e){
    e.parentElement.setAttribute("class","yellow");
}

function B(e){
    const collection = e.children;
    for (let i = 0; i < collection.length; i++) {
        let element = collection[i];
        if(element.tagName.toLowerCase()=="p"){
            element.setAttribute("class", "blue");
            element.classList.add("vet");
            if(element.classList.contains("vet")){
                element.classList.add("schuin");
            }
            if(!element.hasAttribute("data-nummer")){
                element.setAttribute("data-nummer", 0);
            }
            let attr = element.getAttribute("data-nummer")
            if(attr!="10"){
                element.setAttribute("data-nummer", parseInt(element.getAttribute("data-nummer"))+1);
            }

            element.innerText = `${element.getAttribute("data-nummer")} keer geklikt.`
        }
    }
}
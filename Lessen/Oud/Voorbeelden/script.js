function verberg(element){
    element.setAttribute("hidden", "1");

    element.innerText = element.getAttribute("data-waarde");

}

function toon(){
    var hidden_cells = document.querySelectorAll("td[hidden]");

    for(let e = 0; e < hidden_cells.length ;e++){
        let hidden_element = hidden_cells[e];
        hidden_element.removeAttribute("hidden");
    }

    
}

function makeRed(){
    var p_elements = document.querySelectorAll("p");

    for(let positie = 0; positie < p_elements.length; positie++){
        p_elements[positie].classList.add("red");
        p_elements[positie].classList.remove("textRed");
    }
}

function voegTekstToe(){
    var myDiv = document.querySelector("div#teksten");

    var new_p = document.createElement("p");
    new_p.innerText = "Dit is nog een tekst";

    var new_p_vooraan = document.createElement("p");
    new_p_vooraan.innerText = "EN dit komt vooraan";

    var eerste_p = document.querySelector("div#teksten > p")
    myDiv.insertBefore(new_p_vooraan, eerste_p);

    myDiv.append(new_p);
}
var teller = 1

function voegToe(){
    var lijst = document.querySelector("#mijnLijst");

    var nieuw_element = document.createElement("li");
    nieuw_element.innerText = "Nieuw element - "+teller.toString();

    lijst.appendChild(nieuw_element);

    teller++;
}
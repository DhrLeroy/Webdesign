var teller = 1

function voegToe(){
    var lijst = document.querySelector("#mijnLijst");

    var nieuw_element = document.createElement("li");
    nieuw_element.innerText = "Nieuw element - "+teller.toString();

    var first_li = document.querySelector("#mijnLijst>li:first-child");


    lijst.insertBefore(nieuw_element, first_li);

    teller++;
}
function voegToe(){

    var txt = document.querySelector("#tekstvak");

    txt.setAttribute("hidden","1");

    var new_p = document.createElement("p");
    new_p.innerText = txt.value;

    document.body.appendChild(new_p);

    txt.value = "";

}

function toon(){
    
    var txt = document.querySelector("#tekstvak");

    txt.removeAttribute("hidden");
}
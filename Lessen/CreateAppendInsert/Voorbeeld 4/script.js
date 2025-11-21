function voegToe(){

    var txt = document.querySelector("#tekstvak");

    var new_p = document.createElement("p");
    new_p.innerText = txt.value;

    document.body.appendChild(new_p);

    txt.value = "";

}
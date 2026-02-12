function klik(){
    var veld = document.querySelector("#ingredient");
    var li = document.createElement("li");
    li.innerText = veld.value;
    var ul = document.querySelector("#lijst");
    ul.appendChild(li);
    veld.value = "";
}
function voegHobbyToe(){
    var naam = document.querySelector("#naam");
    var hobby = document.querySelector("#hobby");

    var tr = document.createElement("tr");
    var td_naam = document.createElement("td");
    var td_hobby = document.createElement("td");
    td_naam.innerText = naam.value;
    td_hobby.innerText = hobby.value;
    tr.appendChild(td_naam);
    tr.appendChild(td_hobby);

    var hobbies = document.querySelector("#hobbies");
    hobbies.appendChild(tr);
    naam.value = "";
    hobby.value = "";
}
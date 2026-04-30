function kijk(){
    var veld_naam = document.querySelector("#naam");
    var veld_film = document.querySelector("#film");
    var paragraaf_tekst = document.querySelector("#tekst");
    paragraaf_tekst.innerText = veld_naam.value + " kijk graag naar " + veld_film.value;
    veld_naam.value = "";
    veld_film.value = "";
}
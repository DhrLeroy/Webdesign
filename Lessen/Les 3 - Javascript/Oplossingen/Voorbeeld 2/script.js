function zegHallo(){
    var paragraaf_hallo = document.querySelector("#hallo");
    var tekstveld_naam = document.querySelector("#naam");
    var naam = tekstveld_naam.value;
    paragraaf_hallo.innerText = "Hallo "+naam+"!";

}
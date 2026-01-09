function voegToe(e){
    let text_voor = document.querySelector("#voor").value;
    let text_na = document.querySelector("#na").value;

    let nodeVoor = document.createElement("li");
    nodeVoor.inn = text_voor;
    let nodeNa = document.createElement("li");
    nodeNa.textContent = text_na;

    let gerechten = document.querySelector("#gerechten")

    gerechten.insertBefore(nodeVoor, e)
    gerechten.appendChild(nodeNa)
}
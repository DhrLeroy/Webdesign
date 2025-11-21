function highlight(e){
    var id = e.id;

    var allDivs = document.querySelectorAll("div");
    for(let i = 0; i < allDivs.length; i++){
        allDivs[i].classList.remove("groen");
    }

    var films = document.querySelectorAll("div."+id);
    for(let positie = 0; positie < films.length; positie++){
        films[positie].classList.add("groen");
    }
}
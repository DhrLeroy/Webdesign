function red(){
    let ps = document.querySelectorAll("#genres > li:nth-child(3n+2)");
    for(let i = 0; i < ps.length; i++){
        ps[i].classList.add("red");
    }
}
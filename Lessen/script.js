
function test(e){
    let p1 = document.getElementById("p1");
    if(p1.getAttribute("data-waarde").valueOf() == "A")
        p1.innerText = "A";
    else
        p1.innerText = "B";
}

function a(){
    var tekst = "A";
    if(true){
        var tekst = "B";
        alert(tekst);
    }
    alert(tekst)
    if(true){
        tekst = "C";
    }
    alert(tekst)
}
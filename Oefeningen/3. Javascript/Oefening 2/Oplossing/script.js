function resize(e){
    if(e.classList.contains("large"))
        e.classList.remove("large")
    else
        e.classList.add("large")
}

function yellow(e){
    var row = e.parentElement;

    row.classList.add("yellow");
}

function unyellow(e){
    var row = e.parentElement;

    row.classList.remove("yellow");
}
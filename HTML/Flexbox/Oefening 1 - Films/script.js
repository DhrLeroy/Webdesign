function onEnter(e){
    var images = document.getElementsByTagName("img");
    for(let i = 0; i < images.length; i++){
        images[i].classList.add("grey");
    }
    e.classList.remove("grey");
}

function onLeave(e){
    var images = document.getElementsByTagName("img");
    for(let i = 0; i < images.length; i++){
        images[i].classList.remove("grey");
    }
}
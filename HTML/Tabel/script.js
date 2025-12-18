function f(e){
    let imgs = document.querySelectorAll("img");
    for(let i = 0; i < imgs.length; i++){
        imgs[i].classList.remove("focused");
    }
    e.classList.add("focused");

    let h1 = document.querySelector("#titel");
    h1.innerText = e.getAttribute("data-titel");
}

function s(e){
    let imgs = document.querySelectorAll("img");        
    let table = document.querySelector("#"+e.getAttribute("data-film"));
    if(e.classList.contains("showed")){
        e.classList.remove("showed");
        for(let i = 0; i < imgs.length; i++){
            imgs[i].removeAttribute("hidden");
        }
        table.setAttribute("hidden","1");
    }else{
        for(let i = 0; i < imgs.length; i++){
            imgs[i].setAttribute("hidden", "1");
        }
        e.removeAttribute("hidden");
        e.classList.remove("focused");
        e.classList.add("showed");

        let tables = document.querySelectorAll("table");
        for(let i = 0; i < tables.length; i++){
            tables[0].setAttribute("hidden", "1");
        }

        table.removeAttribute("hidden");
    }
    
}
function a(caller){
    let parent = caller.parentElement;
    let elements = parent.children;
    for(let i = 0; i < elements.length; i++){
        let element = elements[i];
        if(element.tagName.toLowerCase() == "p"){
            element.classList.remove("test");
        }
    }
}
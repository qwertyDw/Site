const text= document.querySelector(".sec-text");

const  textLoad=()=>{
    setTimeout(() => {
        text.textContent="ERKHEMZAYA"
    }, 0);
    setTimeout(() => {
        text.textContent="TEENCODER"
    }, 4000);
}
textLoad();
setInterval(textLoad, 8000)

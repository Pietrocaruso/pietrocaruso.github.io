var landscape = document.getElementById("landscape"); 
var nome = document.getElementById("name")
var presenta = document.getElementById("presenta")
var presentation = document.getElementById("presentatizione")

portrait : Boolean
if(window.innerHeight > window.innerWidth){
    nome.hidden = true;
    presenta.hidden = true;
    landscape.hidden =false;
    console.log(window.innerHeight, window.innerWidth)
    document.body.style.backgroundColor = "#6683b3"
}else {
    landscape.style.display = "none";
    presentation.hidden = false; 
    presentation.style.display = "block"; 
    presentation.style.marginTop = window.innerHeight / 4 + "px";
   presenta.style.position = "absolute" 
}
id = null ; 
function presentami(){
    

}
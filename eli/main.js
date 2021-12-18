var landscape = document.getElementById("landscape"); 
var nome = document.getElementById("name")
var presenta = document.getElementById("presenta")
var presentation = document.getElementById("presentatizione")

portrait : Boolean
if(window.innerHeight > window.innerWidth){
    nome.hidden = true;
    presenta.hidden = true;
    landscape.hidden =false;
    alert(window.innerHeight.toString() + " "+  window.innerWidth.toString())
    document.body.style.backgroundColor = "#247ba0"
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

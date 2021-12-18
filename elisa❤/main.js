var landscape = document.getElementById("landscape"); 
var nome = document.getElementById("name")
var presenta = document.getElementById("presenta")
portrait : Boolean
if(window.innerHeight > window.innerWidth){
    
    portrait = true
   console.log(portrait,"")
}else {
    portrait = false

}
if (portrait == false){
    nome.hidden = true
    presenta.hidden = true
    landscape.hidden = false
}else{
    nome.hidden = false
    presenta.hidden = false
    landscape.hidden = true
}



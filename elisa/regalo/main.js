var glitch = document.getElementById("glitch-js")


glitch.style.display = "block";

glitch.style.marginTop = window.innerHeight / 2 + "px"
var img = document.getElementById("img")

function ciao (){ 
   console.log(window.location.pathname)
    if (window.location.pathname.includes("index.html")){
        window.location.pathname.replace("index.html", "camicazze.html")
    }else{
        window.location.pathname = window.location.pathname + "camicazze.html"
    }
    
}
/*
if (window.innerHeight > window.innerWidth){
    img.src = "layout-vertical"
    img.style.width = window.innerHeight
    img.style.height = window.innerWidth
}else{
    img.style.width = window.innerWidth
    img.style.height = window.innerHeight
}
*/
setTimeout(ciao,4000)
var glitch = document.getElementById("glitch-js")


glitch.style.display = "block";

glitch.style.marginTop = window.innerHeight / 2 + "px"

function ciao (){ 
    console.log(window.location.pathname)
    
}

setTimeout(ciao,50)
var glitch = document.getElementById("glitch-js")


glitch.style.display = "block";

glitch.style.marginTop = window.innerHeight / 2 + "px"

function ciao (){ 
   console.log(window.location.pathname)
    console.log(window.location.pathname.replace("index.html", "scusa.html"))
    window.location.href = window.location.href.replace("index.html", "scusa.html")
}

setTimeout(ciao,1500)
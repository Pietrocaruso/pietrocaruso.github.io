var landscape = document.getElementById("landscape"); 
var lettera = document.getElementById("lettera")

portrait : Boolean

if(window.innerHeight > window.innerWidth){
    
    landscape.hidden =false;
    lettera.hidden = true;
    document.body.style.backgroundColor = "#247ba0"
}else {
    lettera.hidden = false
    landscape.style.display = "none";
}
id = null ; 
function startshow(){
    setTimeout(function(){
        if(window.location.pathname.includes("index.html")){
            window.location.pathname = window.location.pathname.replace("index.html","letter.html")

        }else{
            window.location.pathname = window.location.pathname + "letter.html"
        }

    },3000)
}
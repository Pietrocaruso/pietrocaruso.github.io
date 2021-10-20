document.addEventListener("DOMContentLoaded", function (event) {
    type();
    movingBackgroundImage();
    
 });
var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);
var clicked = []
 function getKey(e)
 {
 var tasto = e.keyCode;
 var tastoletter = e.getKey;
    
    var tosearch = secret()
    var tosearch = tosearch.toUpperCase()
    var tosearch = tosearch.split('')
    var testo = String.fromCharCode(tasto)
    clicked.push(testo)
        if (tasto == 49){
            window.location.href = url.replace("/"+ filename,"/index.html") ;
        
        }
        if (tasto == 50){
            window.location.href = url.replace("/"+ filename,"/about.html") ;}
        if (tasto == 51){
            window.location.href = url.replace("/"+ filename,"/contact.html") ;
        }
        

            
            if (clicked.length == tosearch.length){
                for (var i = 0; i < clicked.length; i++) {
                                if (clicked[i] == tosearch[i])  {
                                    var equal =  true
                                }else {
                                    var equal = false
                                }
                            }

            }else {
                var equal = false
            } 
        if (equal == true){alert("Giusto")}
        if (tasto == 18){
            clicked = []

        }
            
    console.log(clicked)
        
            
    
    
    
 }
 function secret () {
    return "ciao"
    
 }



 
 document.onkeyup = getKey;

 


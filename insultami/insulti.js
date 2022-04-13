var insulto_text = document.getElementById("text-insulto")
var insulti_container = document.getElementById("insulti-container")
var range_odio = document.getElementById("range-odio")
var label_insulti = document.getElementById("container__label")
insulti_container.style.width = window.innerWidth / 4 + "px"
insulti_container.style.height = window.innerHeight / 4 + "px"
let style = getComputedStyle(label_insulti);
console.log(style.inlineSize)
console.log(insulto_text.ariaValueNow)

function send_all(){
    if(insulto_text.value == ""){
        insulto_text.style.borderBottomWidth = "4px"
        insulto_text.style.borderBlockColor = "red";
    }else{
        Email.send({
            Host: "smtp.gmail.com",
            Username: "insultiperpietro@gmail.com",
            Password: "insultiperpietro12",
            To: 'pietrocaruso406@gmail.com',
            From: "insultiperpietro@gmail.com",
            Subject: "insulto",
            Body: "il tuo insulto: " + insulto_text.value + "e l'odio verso di te è" + range_odio.value ,
          }).then(alert("mail sent"))
          insulto_text.value = ""
          range_odio.value = 0 
          

    }
}
function print_data(){
    console.log(insulto_text.value,range_odio.value)
}
function open_folder(name_folder){
    if (window.location.pathname.includes("index.html")){
        window.location.pathname = window.location.pathname.replace("/index.html","/"+ name_folder)
    }else{
        window.location.pathname = "/" +  name_folder
    }
}

console.log(window.location.pathname)
var selectInput = document.getElementById("Choose");
var imageHolder = document.getElementById("imgholder");

function changepicmeth(value){
    
    console.log(value);
    if(value == "1"){
        imageHolder.src = "mypic.jpg"
    }else if(value == "2"){
        imageHolder.src = "lol.webp"
    }
}
for(var i=0; i<document.querySelectorAll(".drum").length; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", getsound);
}

function  getsound()
{
    var note1= this.textContent;
    soundPlay(note1);
    buttonAnimation(note1);
}

document.addEventListener("keypress",function(event){
    soundPlay(event.key);
    buttonAnimation(event.key);
});

// function keyEvent(note2)
// {
//     soundPlay(note2);
    
// }

function soundPlay(note){
    switch(note){
        case "w":
            var audio= new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a": 
            var audio= new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio= new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio= new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio= new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio= new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio= new Audio("sounds/tom-4.mp3");
            audio.play();
        default:
            console.log("Unspecified Input");
        }
}

function buttonAnimation(input){
    var buttonReq=document.querySelector("."+input);
    buttonReq.classList.add("pressed");
    setTimeout(function(){
        buttonReq.classList.remove("pressed");
    },100);
}
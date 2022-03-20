let musicButtonList = document.querySelectorAll(".drum");

let audio;
for(let i = 0 ; i<musicButtonList.length;i++){

    musicButtonList[i].addEventListener("click",handleClicked);
}

function handleClicked(){
    let buttonInnerHtml = this.innerHTML; 
    makeSound(buttonInnerHtml)

}

document.addEventListener("keydown",function(event){
    console.log(event)
    makeSound(event.key);

   
});

function makeSound(key) {
    switch (key) {
        case "w":
            audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
    
        default: console.log("wrong KEY");
            break;
    }
    makeAnimaton(key);
}

function makeAnimaton(currentKey){
    let keyToAnimate = document.querySelector("."+currentKey);
    keyToAnimate.classList.add("pressed");
    setTimeout(() => {
        keyToAnimate.classList.remove("pressed")
    }, 100);
}


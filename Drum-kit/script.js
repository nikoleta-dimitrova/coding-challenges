document.addEventListener('keyup', (event) => {
    document.getElementById(`${event.key.toUpperCase()}`).style.opacity = 1;
})

document.addEventListener('keydown', (event) => {
    let keyPressed = event.key.toUpperCase();
    var drumSound = new Audio();
    
    switch(keyPressed) {
        case "S":
            drumSound.src = "./sounds/tom1.mp3"
            break;
        case "D":
            drumSound.src = "./sounds/tom2.mp3"
            break;
        case "F":
            drumSound.src = "./sounds/tom3.mp3"
            break;
        case "G":
            drumSound.src = "./sounds/tom4.mp3"
            break;
        case "H":
            drumSound.src = "./sounds/snare.mp3"
            break;
        case "J":
            drumSound.src = "./sounds/crash.mp3"
            break;
        case "K":
            drumSound.src = "./sounds/bass.mp3"
            break;
        default:
            break;
    }
    document.getElementById(`${keyPressed}`).style.opacity = .5
    drumSound.play()
})
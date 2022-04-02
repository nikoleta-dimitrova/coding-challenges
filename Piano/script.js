var pianoSound = new Audio();

document.addEventListener('keyup', (event) => {
    document.getElementById(`${event.key.toUpperCase()}`).style.opacity = 1;
})

document.addEventListener('keydown', (event) => {
    let keyPressed = event.key.toUpperCase();
    switch(keyPressed) {
        case "Q":
            pianoSound.src = "./sounds/zombie.mp3"
            break;
        case "W":
            pianoSound.src = "./sounds/cackle3.mp3"
            break;
        case "E":
            pianoSound.src = "./sounds/dragon.wav"
            break;
        case "R":
            pianoSound.src = "./sounds/wolf.wav"
            break;
        case "T":
            pianoSound.src = "./sounds/creepy.wav"
            break;
        case "Y":
            pianoSound.src = "./sounds/witches_house.mp3"
            break;
        case "U":
            pianoSound.src = "./sounds/woscream4.mp3"
            break;
        case "I":
            pianoSound.src = "./sounds/GHOSTLY.mp3"
            break;
        case "O":
            pianoSound.src = "./sounds/laughhowl1.mp3"
            break;
        case "P":
            pianoSound.src = "./sounds/MONSTER_Echo.mp3"
            break;
        default:
            break;
    }
    document.getElementById(`${keyPressed}`).style.opacity = .7
    pianoSound.play()
})
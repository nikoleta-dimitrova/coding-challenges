setInterval(setClock, 1000)
// we call this function every second

const hoursLine = document.querySelector('[data-hour-line]')
const minutesLine = document.querySelector('[data-minute-line]')
const secondsLine = document.querySelector('[data-second-line]')

function setClock(){
    const currentDate = new Date()
    // will give you the current date
    const secondsRatio = currentDate.getSeconds() / 60
    // there are 60 seconds in a minute, by /60 we get the idea of how to rotate the element
    const minutesRatio = (secondsRatio + currentDate.getMinutes())/ 60
    // to prevent the minutes change only when an hour is passed
    // makes the minutes change slowly and gradually
    const hoursRatio = (minutesRatio + currentDate.getHours())/ 12
    //same thing for the hours, to move them gradually
    rotationSet(secondsLine, secondsRatio)
    rotationSet(minutesLine, minutesRatio)
    rotationSet(hoursLine, hoursRatio)
}

function rotationSet(element, rotationRatio){
    // it will take the element as well as the rotation we want
    element.style.setProperty('--rotation', rotationRatio * 360) 
}

setClock()
// to start when loaded
function startSlideShow() {
    document.getElementById("intro").style.visibility = 'hidden';
    document.getElementById('first-scene').style.visibility = 'visible';
    var myAudio = new Audio('sounds/where_perry.mp3') 
    myAudio.play()
    
}

function secondScene() {
    document.getElementById('first-scene').style.visibility = 'hidden';
    document.getElementById('second-scene').style.visibility = 'visible';
    setTimeout(thirdScene, 2000);
}

function thirdScene(){
    document.getElementById('second-scene').style.visibility = 'hidden';
    document.getElementById('third-scene').style.visibility = 'visible'; 
    var myAudio = new Audio('sounds/theme.mp3') 
    myAudio.play()
    setTimeout(forthScene, 4000);
}


function forthScene(){
    document.getElementById('third-scene').style.visibility = 'hidden';
    document.getElementById('forth-scene').style.visibility = 'visible';
    var myAudio = new Audio('sounds/bell_ring.mp3') 
    document.getElementById('doof').classList.add('doof-walk')
    myAudio.play()
    setTimeout(fifthScene, 3000);
}

function fifthScene() {
    document.getElementById('forth-scene').style.visibility = 'hidden';
    document.getElementById('fifth-scene').style.visibility = 'visible';
    var myAudio = new Audio('sounds/who_are_you.mp3') 
    myAudio.play()
    setTimeout(sixthScene, 4000);
}

function sixthScene() {
    document.getElementById('fifth-scene').style.visibility = 'hidden';
    document.getElementById('sixth-scene').style.visibility = 'visible';
    document.getElementById('smoke').classList.add('smoke-effect')
    setTimeout(seventhScene, 900);
}

function seventhScene(){
    document.getElementById('sixth-scene').style.visibility = 'hidden';
    document.getElementById('seventh-scene').style.visibility = 'visible';
    document.getElementById('end_doof').classList.add('doofMove');
    var myAudio = new Audio('sounds/dof_reveals.mp3') 
    myAudio.play()
    setTimeout(eigthScene, 3000);
}

function eigthScene(){
    document.getElementById('seventh-scene').style.visibility = 'hidden';
    document.getElementById('eigth-scene').style.visibility = 'visible';
    var myAudio = new Audio('sounds/perry_grr.mp3') 
    myAudio.play()
    setTimeout(ninthScene,3000);
}
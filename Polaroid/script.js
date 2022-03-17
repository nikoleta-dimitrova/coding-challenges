Webcam.set({
    width:270,
    height:200,
    image_format:'jpeg',
    jpeg_quality:100
})

Webcam.attach("#camera")
function take_snapshot(){

Webcam.snap(function(data_uri){
    document.getElementById('results').innerHTML =
     '<img src="'+data_uri+'"/>';
})
}

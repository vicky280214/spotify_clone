function playAll(songNumber) {
    var audioElement = document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    var songFileName = "../MUSIC/" + songNumber + ".mp3";
   if(audioElement.getAttribute("src")==songFileName && !audioElement.paused)
   {
    audioElement.pause();
    playBtn.innerHTML='<img src="../IMAGES/play-button.svg">';
   }
   else{
    audioElement.setAttribute("src",songFileName);
    audioElement.play();
    playBtn.innerHTML='<img src="../IMAGES/pause-button.svg">'; 
}
}
function playaudio()
{
var audio=document.getElementById("song");
var playBtn=document.getElementById("play-pause");
if(audio.paused)
{
    audio.play();
    playBtn.innerHTML='<img src="../IMAGES/pause-button.svg">'; 
}
else
{
    audio.pause();
    playBtn.innerHTML='<img src="../IMAGES/play-button.svg">';
}
}

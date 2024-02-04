'use strict';

function playAudio(audioSource) {
  var audio = document.getElementById('audio');
  var source = document.getElementById('audioSource');
  source.src = audioSource;
  audio.load();
  audio.play();

  audio.style.display = 'none';
}

function noSadboi() {
    var grabe = "SOBRA KANA 2024 BAT D NA LANG AKO PINATAY NI LORD";
    document.getElementById('demo').innerHTML = grabe;

  //the gif will display if the no button is pressed
    var gifSadCat = "static/verysad.gif";  // Replace with the actual path to your GIF
    document.getElementById('gif-container').innerHTML = '<img src="' + gifSadCat + '" alt="Sad Cat GIF">';

    document.getElementById('noice').style.display = 'none';

    document.getElementById('demo').style.display = 'block';


   playAudio("static/Sad Cat Meowing Meme Green Screen Chroma Key Template.mp3")
  }
  
function happyBoi(){
  var yahuhur = "VERY NOICE!!! IMMA SEE BEBU ON BALENTAYMS AND AM GONNA SUNDO HER"
  document.getElementById('noice').innerHTML = yahuhur;

  var gifHappycat = "static/happycatty.gif";
  document.getElementById('gif-container').innerHTML ='<img src="' + gifHappycat + '" alt="Sad Cat GIF">';
  document.getElementById('demo').style.display = 'none';

  document.getElementById('noice').style.display = 'block';

  
 playAudio("static/HAPPY HAPPY HAPPY  TikTok sound effect.mp3"); 
}

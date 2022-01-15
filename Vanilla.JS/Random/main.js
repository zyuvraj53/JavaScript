let audio = new Audio("http://21273.live.streamtheworld.com/LOS40_DANCE.mp3");

audio.play();

// window.setInterval(changevolume(), 1);

// function changevolume() {

//  var x = audio.value;
//  var y = x / 100;

//  video.volume = y;

// }

setInterval(() => {
  volChange();
}, 1);


function volChange(){
let vol = document.getElementById("volume-control").value;
audio.volume = vol / 100;
}


// volume.addEventListener("change", function(e) {
// audio.volume = e.currentTarget.value / 100;
// })
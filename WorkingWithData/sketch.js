var weather;

function setup() {
  createCanvas(200, 200);
  // loadJSON("http://api.open-notify.org/astros.json", gotData)
  loadJSON("https://api.openweathermap.org/data/2.5/weather?q=London&appid=3e42d5b9cea24f04dbc62664c5b336fb&units=metric", gotWeatherData);
}

function gotData(data){
  // console.log(data);
}

function gotWeatherData(data){
  weather = data;
}

function draw() {
  background(125, 0, 255);
  if(weather){
    ellipse()
  }
}

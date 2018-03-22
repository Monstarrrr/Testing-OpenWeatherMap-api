var weather;

function setup() {
    createCanvas(200, 200);
    loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Lille&APPID=4b92ff777114f0a76b1415228284494a&units=metric', gotData);
}

function gotData(data) {
    weather = data;
}

function draw() {
    background(0);
    if (weather) {
        //Max temperature
        ellipseMode(CENTER);
        fill(255);
        ellipse(100, 100, weather.main.temp_max * 10, weather.main.temp_max * 10);
        //Min temparature
        ellipseMode(CENTER);
        fill(100);
        ellipse(100, 100, weather.main.temp_min * 10, weather.main.temp_min * 10);
    }
}

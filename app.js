const apiKey = '0bfe26c7401924934474bac09c2fff60';
let apiurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

async function CheckWeather(city) {
    const response = await fetch(apiurl + `${city}&appid=${apiKey}`);
    var data = await response.json();
     console.log(data);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";
    let weather_condition=data.weather[0].main;
    if(weather_condition=='Clear'){
        document.querySelector('weather-icon').src='./images/clear.png';
    }
    else if(weather_condition=='Clouds'){
        document.querySelector('.weather-icon').src='./images/clouds.png';
    }
    else if(weather_condition=='Rain'){
        document.querySelector('.weather-icon').src='./images/rain.png';
    }
    else if(weather_condition=='Drizzle'){
        document.querySelector('.weather-icon').src='./images/drizzle.png';
    }
    else if(weather_condition=='Snow'){
        document.querySelector('.weather-icon').src='./images/snow.png';
    }
    else if(weather_condition=='Wind'){
        document.querySelector('.weather-icon').src='./images/Wind.png';
    }
    else if(weather_condition=='Mist'){
        document.querySelector('.weather-icon').src='./images/mist.png';
    }
}

let btn = document.querySelector('button');
btn.addEventListener('click', function() {
    let input_city = document.querySelector('input').value;
    document.querySelector('.weather').style.display='block';
    CheckWeather(input_city);
});

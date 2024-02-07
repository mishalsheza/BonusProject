const APIkey = "e0becdd19aa0debec8acffd68bc7dcc7";
const APIurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherImg=document.querySelector(".weather-img")


async function checkWeather(city) {
    const response = await fetch(APIurl + city + `&appid=${APIkey}`);
    if(response.status == 404){
        (document.querySelector(".error").style.display="block");
        (document.querySelector(".weather").style.display="none");

    }
    else{
        var data = await response.json();
    console.log(data);
    
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ "°c";
    document.querySelector(".humidity-val").innerHTML=data.main.humidity+ "%";
    document.querySelector(".wind-val").innerHTML=data.wind.speed + "km/hr";
    document.querySelector(".pressure-val").innerHTML=data.main.pressure + " Pa";
    document.querySelector(".feels-like-val").innerHTML=data.main.feels_like + "°c";
    document.querySelector(".descrip-val").innerHTML=data.weather[0].description + " ";
    document.querySelector(".max-temp-val").innerHTML=data.main.temp_max + "°c";



    if(data.weather[0].main=="Clouds"){
        weatherImg.src="/home/sheza/Desktop/weather/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherImg.src="/home/sheza/Desktop/weather/clear.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherImg.src="/home/sheza/Desktop/weather/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherImg.src="/home/sheza/Desktop/weather/mist.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherImg.src="/home/sheza/Desktop/weather/rain.png";
    }
    else if(data.main.temp == "Snow"){
        weatherImg.src="/home/sheza/Desktop/weather/snow.png";
    }
    document.querySelector(".error").style.display="none";
    }
}
searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);


})




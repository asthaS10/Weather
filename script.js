
const searchInput = document.querySelector(".search input");
const searchBtn = document.getElementById(".search button");

async function getweather(city) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?
    units=metric&q=${city}&appid=d724cda7b371781dc0c52b25397293e8`);
    const data = await res.json();
    console.log(data);
    document.querySelector('.celcius').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidityP').innerHTML = data.main.humidity + "%";
    document.querySelector('.windS').innerHTML = data.wind.speed +"km/h";

} 
searchBtn.addEventListener("click", () => {
    getweather(searchInput.value);
    });
    // 



    // const apiKey = "863242cfb2b1d357e6093d9a4df19a4b";
    // const apiUrl =
    //   "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    
    // const searchBox = document.querySelector(".search input");
    // const searchBtn = document.querySelector(".search button");
    // const weatherIcon = document.querySelector(".weather-icon");
    
    // async function checkWeather(city) {
    //   const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    // console.log(response);
    //   if (response.status == 404) {
    //     document.querySelector(".error").style.display = "block";
    //     document.querySelector(".weather").style.display = "none";
    //   } else {
    //     let data = await response.json();
    // console.log(data);
    //     document.querySelector(".city").innerHTML = data.name;
    //     document.querySelector(".temp").innerHTML =
    //       Math.round(data.main.temp) + "°C";
    //     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    //     document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
    //     if (data.weather[0].main == 'Clouds') {
    //       weatherIcon.src = "./img/clouds.png";
    //     } else if (data.weather[0].main == "Clear") {
    //       weatherIcon.src = ".\img\clear.png";
    //     } else if (data.weather[0].main == "Rain") {
    //       weatherIcon.src = ".\img\rain.png";
    //     } else if (data.weather[0].main == "Drizzle") {
    //       weatherIcon.src = ".\img\drizzle.png";
    //     } else if (data.weather[0].main == "Mist") {
    //       weatherIcon.src = ".\img\mist.png";
    //     } else if (data.weather[0].main == "Snow") {
    //       weatherIcon.src = ".\img\snow.png";
    //     }
    //     document.querySelector(".weather").style.display = "block";
    //     document.querySelector(".error").style.display = "none";
    //   }
    // }
    // searchBtn.addEventListener("click", () => {
    //   checkWeather(searchBox.value);
    // });
    
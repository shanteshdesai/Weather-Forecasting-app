const apiKey = "df7f291d629467b9e80045fc1ff96798";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    try {
        const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
        const data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".type").innerHTML = data.weather[0].main;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

        if (data.weather[0].main == "clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if (data.weather[0].main == "clear") {
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main == "rain") {
            weatherIcon.src = "images/rain.png";
        } else if (data.weather[0].main == "drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main == "mist") {
            weatherIcon.src = "images/mist.png";
        } else if (data.weather[0].main == "snow") {
            weatherIcon.src = "images/snow.png";
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});






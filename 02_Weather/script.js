const apikey = "c89298c822b5e012a6263e5df0ffcdc4";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchCity = document.querySelector(".searchCity");
const weatherIcon = document.querySelector(".weather-icon");

console.log(weatherIcon);

searchCity.addEventListener("click", () => {
  const searchInput = document.querySelector("#searchInput");
  const cityName = searchInput.value;
  if (cityName === "") {
    alert("plz enter city");
  }

  checkWeather(cityName);
});

async function checkWeather(city) {
  const resp = await fetch(`${apiurl}${city}&appid=${apikey}`);

  if (resp.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }

  let data = await resp.json();

  console.log(data);

  document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp) + " °C";
  document.querySelector(".city-name").innerHTML = data.name;
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "./images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "./images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "./images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "./images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "./images/mist.png";
  }
}

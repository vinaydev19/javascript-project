const apikey = "9638019b0ce4cd919514be167835c1a8";

let userInput = document.querySelector("#searchInput");
let getresult = document.querySelector("#getresult");
let country;

async function getweather(city) {
  let resp = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apikey}&q=${city}`
  );

  if (resp.status === 400) {
    document.querySelector("#hide").style.display = "block";
  }
  let data = await resp.json();
  console.log(data);
  document.querySelector(".temp").innerHTML = data.main.temp;
  document.querySelector(".cityName").innerHTML = city;
  document.querySelector("#humidity").innerHTML = data.main.humidity;
  document.querySelector("#Wind_speed").innerHTML = data.wind.speed;
  document.querySelector(".condition_text").innerHTML =
    data.weather[0].description;
  document.querySelector("#hide").style.display = "block";

  document.querySelector(".date").innerHTML = new Date().toLocaleDateString(
    "en-IN"
  );

  setInterval(() => {
    document.querySelector(".time").innerHTML = new Date().toLocaleTimeString(
      "en-Russia"
    );
  }, 1000);

  let weather_types_img = document.querySelector(".weather_types_img");
  if (data.weather[0].main === "Clouds") {
    weather_types_img.src = `/images/clouds.png`;
  } else if (data.weather[0].main === "Clear") {
    weather_types_img.src = `/images/clear.png`;
  } else if (data.weather[0].main === "Rain") {
    weather_types_img.src = `/images/rain.png`;
  } else if (data.weather[0].main === "Drizzle") {
    weather_types_img.src = `/images/drizzle.png`;
  } else if (data.weather[0].main === "Mist") {
    weather_types_img.src = `/images/mist.png`;
  }
}

getresult.addEventListener("click", () => {
  getweather(userInput.value);
});

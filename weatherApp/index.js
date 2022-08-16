// Fetch weather data from given location
const fetchData = async (location) => {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a8670a42bf4a7d51171b9efe3c89af7b&units=metric`
  );
  const responseJson = await response.json();

  processData(responseJson);
};

// Process weather data needed for website
const processData = (data) => {
  let weatherData = {
    location: data.name,
    temperature: data.main.temp,
    icon: data.weather[0].icon,
    feelsLike: data.main.feels_like,
    windspeed: data.wind.speed,
  };
  refreshWeatherDisplay(weatherData);
};

// Eventlistener for 'Search' button
const searchClicked = () => {
  const location = document.querySelector(".inputLocation");
  console.log(location.value);
  fetchData(location.value);
};

const refreshWeatherDisplay = (weatherObject) => {
  changeIcon(weatherObject.icon);
  changeLocation(weatherObject.location);
  changeTemperature(weatherObject.temperature);
  changeFeelsLike(weatherObject.feelsLike);
  changeWind(weatherObject.windspeed);
};

const changeIcon = (iconName) => {
  let imgIcon = (document.querySelector(
    ".imgIcon"
  ).src = `http://openweathermap.org/img/wn/${iconName}@2x.png`);
};
const changeTemperature = (newTemperature) => {
  let divTemperature = (document.querySelector(".temperature").textContent = ` 
    ${newTemperature} °C`);
};
const changeLocation = (newLocation) => {
  let divLocation = (document.querySelector(".location").textContent =
    newLocation);
};
const changeFeelsLike = (newTemperature) => {
  let divFeelsLike = (document.querySelector(
    ".feelsLike"
  ).textContent = `Feels like: ${newTemperature} °C`);
};
const changeWind = (newWind) => {
  let divWind = (document.querySelector(
    ".wind"
  ).textContent = `Wind: ${newWind} m/s`);
};

// Display Joensuu's weather on startup
fetchData("Joensuu");

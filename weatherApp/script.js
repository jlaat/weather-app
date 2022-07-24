// Fetch weather data from given location
const fetchData = (location) => {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a8670a42bf4a7d51171b9efe3c89af7b&units=metric`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      processData(data);
    });
};

// Process weather data needed for website
const processData = (data) => {
  let weatherData = {
    location: data.name,
    temperature: data.main.temp,
    icon: data.weather[0].icon,
  };
  console.log(weatherData);
};

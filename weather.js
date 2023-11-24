//Complete the Weather API Backend part using openweathermap api

// Progression 1: Create a function and fetch data using "fetch" from openweathermap api and display the data as given in reference image.


var cityName=document.getElementById("city");
var date=document.getElementById("date")
var temperature=document.getElementById("temperature")
var cloud=document.getElementById("type")
var max_temp=document.getElementById("max")
var min_temp=document.getElementById("min")






async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=11f1c600f4932aa8bf3f3e37fa6fedba`;
  try {
    const respo = await fetch(url);
    const data = await respo.json();
    if (data.cod === '404') {
      // City not found, display an error message
      cityName.textContent = 'This is not a valid input';
      date.textContent = '';
      temperature.textContent = '';
      max_temp.textContent = '';
      min_temp.textContent = '';
      cloud.textContent = '';
    } else {
      // Valid city, display weather data
      cityName.textContent = `${data.name}`;
      temperature.textContent = `${(data.main.temp - 273).toFixed(0)} °C`;
      max_temp.textContent = `${(data.main.temp_max - 273).toFixed(0)} °C /`;
      min_temp.textContent = `${(data.main.temp_min - 273).toFixed(0)} °C`;
      cloud.textContent = `${data.weather['0'].description}`;
      var options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
        var currentDate = new Date().toLocaleDateString('en-US', options);
      date.textContent = currentDate;
    }
  } catch (err) {
    console.log(err);
  }
}
function getData() {
  var city = document.getElementById('search_bar').value;
  getWeather(city); 
}



// axios.get(url).then((response) => {
//   console.log(response.data);
// });

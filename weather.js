//Complete the Weather API Backend part using openweathermap api

// Progression 1: Create a function and fetch data using "fetch" from openweathermap api and display the data as given in reference image.
var city = 'jalandh';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=11f1c600f4932aa8bf3f3e37fa6fedba`;

async function getWeather(){
try{
  const respo=await fetch(url)
  const data= await respo.json()
  console.log(data)
}
catch(err){
  console.log(err)
}
}
getWeather()








// axios.get(url).then((response) => {
//   console.log(response.data);
// });

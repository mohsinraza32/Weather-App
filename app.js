function getWeather(){

    let cityName = document.getElementById("cityName").value;

    // da26a1722e2f4859a1863343233103
axios.get(`http://api.weatherapi.com/v1/current.json?key= da26a1722e2f4859a1863343233103&q=${cityName}&aqi=no`)
.then(function (response) {
// handle success

let weatherData = response.data;

console.log(weatherData);
// console.log(weatherData.current.cloud);
// console.log(weatherData.current.humidity);
// console.log(weatherData.location.country);
// console.log(weatherData.location.name);

document.querySelector(".mainresult").style.display = "block";

document.getElementById("result1").innerHTML = `<p>precipatation: ${weatherData.current.precip_mm}%</p>`;
document.getElementById("result2").innerHTML = `<p>Humidity: ${weatherData.current.humidity}%</p>`;
document.getElementById("result3").innerHTML = `<p>wind in mph: ${weatherData.current.wind_mph}</p>`;
document.getElementById("result4").innerHTML = `<p>temperature: ${weatherData.current.temp_c}&deg;C</p>`;
document.getElementById("result5").innerHTML = `<p>temperature: ${weatherData.current.temp_f}&deg;F</p>`;



})
.catch(function (error) {
// handle error
console.log(error);

})

}
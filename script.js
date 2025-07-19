const form = document.querySelector(".weather-form");
const input = document.querySelector(".weather-input");
const loading  = document.querySelector(".loading");
const result = document.querySelector(".weather-result");

const apiKey = "2efa935967b5e19e290e79be414d5620";

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const city = input.value.trim();

    loading.style.display = "block";
      
    try {
    const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data =  await response.json();
    console.log (data);

    if (data.cod != 200) {
        result.innerHTML = "City not found";
        return;
    }
    
    loading.style.display = "none";

    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    result.innerHTML = `
        <h2> ${data.name}, ${data.sys.country}</h2>
        <img src = ${iconUrl} alt = "weather icon"   class = "weather-icon">
        <p> ${data.weather[0].description}</p>
        <p> Temperature ${data.main.temp}C </p>`;
    
    } catch (error) {
        result.innerHTML = "Error fetching data";
        return;
    }    

    form.reset();
});
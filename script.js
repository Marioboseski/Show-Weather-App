const form = document.querySelector(".weather-form");
const input = document.querySelector(".weather-input");
const loading = document.querySelector(".loading");
const result = document.querySelector(".weather-result");

const API_KEY = "2efa935967b5e19e290e79be414d5620";

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    city = input.value.trim();
    
    if (city === '') {
        return;
    }

    result.textContent = "";

    
    try {
        const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        const data = await response.json();
        console.log (data);
    }

    
});
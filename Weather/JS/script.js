const key = "2ed72d1eb6254feeb9394556251604";
const city = "Majadahonda";
const endpoint = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&aqi=no`;

const fetchWeather = async () => {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`Error al obtener los datos, código: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);

        const { location, current } = result;
        const { name, country } = location;
        const {
            condition: { text, icon },
            temp_c,
            humidity,
            wind_kph,
            precip_in
        } = current;

        const setWeatherBackground = (conditionText) => {
            const body = document.body;
            let backgroundImage = '';
        
            const condition = conditionText.toLowerCase();
        
            if (condition.includes('sunny')) {
                backgroundImage = "url('./IMG/soleado.jpg')";
            } else if (condition.includes('cloudy') || condition.includes('overcast')) {
                backgroundImage = "url('./IMG/nublado.jpg')";
            } else if (condition.includes('rain')) {
                backgroundImage = "url('./IMG/lluvioso.jpg')";
            } else if (condition.includes('snow')) {
                backgroundImage = "url('./IMG/nevado.jpg')";
            } else if (condition.includes('storm') || condition.includes('thunderstorm')) {
                backgroundImage = "url('./IMG/tormenta.jpg')";
            } else {
                backgroundImage = '';
            }
        
            body.style.backgroundImage = backgroundImage;
            body.style.backgroundSize = "cover";
            body.style.backgroundPosition = "center";
        };

        setWeatherBackground (text)

        const currentWeather = document.getElementById('currentWeather');
        const currentTemplate = `
            <h2>${name} / ${country}</h2>
            <p>${text}</p>
            <div class="currentData">
                <div class="currentGrades">
                    <img class="weatherIcon" src="http:${icon}" alt="${text}">
                    <div><p>${temp_c} ºC</p></div>
                </div>
                <ul>
                    <li>Precipitaciones: ${precip_in}%</li>
                    <li>Humedad: ${humidity}%</li>
                    <li>Viento: ${wind_kph} Km/h</li>
                </ul>
            </div>
        `;
        currentWeather.innerHTML = currentTemplate;



        const { forecast } = result;
        const forecastWeather = document.getElementById('forecastWeather');
        const forecastDay = forecast.forecastday[0].hour
        forecastDay.forEach(day => {
          const {condition: {text, icon}, time, temp_c} = day       
          forecastTemplate = `
          <li class="forecastGrades">
            <span>${time}<span>
            <img class="weatherIcon" src="http:${icon}" alt="${text}">
            <p>${temp_c} °C</p>
          </li>
          `
          forecastWeather.innerHTML += forecastTemplate
        })

    } catch (error) {
        console.error('Error en fetchWeather:', error.message);
    }
};

fetchWeather();
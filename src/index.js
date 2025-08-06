import './style.css';

async function getWeather(location, unit) {
  const weatherLocal = location;
  const weatherUnit = unit;
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${weatherLocal}?unitGroup=${weatherUnit}&key=QH2MRSYX6DGBHL8ASHC5CKHBE&contentType=json`;
  const dataFetch = await fetch(url);
  const weatherData = dataFetch.json();
  return weatherData;
}

async function weatherCard(data) {
  const weather = await data;
  console.log(weather);
  const container = document.querySelector('div.container');

  const card = document.createElement('div');
  card.classList = 'card';
  container.appendChild(card);

  const title = document.createElement('div');
  title.classList = 'cityTitle';
  card.appendChild(title);

  const city = document.createElement('div');
  city.classList = 'city';
  city.textContent = weather.resolvedAddress;
  title.appendChild(city);

  const timeZone = document.createElement('div');
  timeZone.classList = 'time';
  timeZone.textContent = `${weather.timezone} GMT${weather.tzoffset}`;
  title.appendChild(timeZone);

  const content = document.createElement('content');
  content.classList = 'content';
  card.appendChild(content);

  const weatherCond = document.createElement('div');
  weatherCond.classList = 'weather';
  weatherCond.textContent = weather.currentConditions.conditions;
  title.appendChild(weatherCond);

  const temp = document.createElement('div');
  temp.classList = 'temp celcius';
  temp.textContent = `${weather.currentConditions.temp}°C`;
  content.appendChild(temp);

  const feels = document.createElement('div');
  feels.classList = 'feels celcius';
  feels.textContent = `${weather.currentConditions.feelslike}°C`;
  content.appendChild(feels);

  const humid = document.createElement('div');
  humid.classList = 'humid';
  humid.textContent = `${weather.currentConditions.humidity}%`;
  content.appendChild(humid);

  const wind = document.createElement('div');
  wind.classList = 'wind';
  wind.textContent = weather.currentConditions.windspeed;
  content.appendChild(wind);
}

weatherCard(getWeather('Jakarta', 'metric'));
weatherCard(getWeather('Washington', 'metric'));

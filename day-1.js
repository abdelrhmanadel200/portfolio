const validateForm = () => {
  const name = document.forms["myform"]["name"].value.toLowerCase();
  if (name === "sadji" || name === "sadji zigadi") {
      alert("Welcome Mr Sadji!");
  } else {
      alert(`Hello ${name}!`);
  }
  return false; // Prevent form submission for demonstration
};

const darkmode = () => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  document.body.style.backgroundColor = randomColor;
  document.getElementById('button1').style.backgroundColor = randomColor;
};
document.getElementById('button1').addEventListener('click', darkmode);

// Weather API setup
const API_KEY = 'c50cfa3c829efcd1294a3f02ca1b0983'; // Replace with your actual API key

const getWeather = async () => {
  const city = document.getElementById('city').value;
  const weatherInfoDiv = document.getElementById('weather-info');

  try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      if (!response.ok) throw new Error('City not found');

      const data = await response.json();
      const weatherDescription = data.weather[0].description;
      const temperature = data.main.temp;
      const humidity = data.main.humidity;
      const icon = data.weather[0].icon;

      weatherInfoDiv.innerHTML = `
          <div class="weather-details">
              <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${weatherDescription}" class="weather-icon">
              <div>
                  <p>Weather in ${city}: ${weatherDescription}</p>
                  <p>Temperature: ${temperature}°C</p>
                  <p>Humidity: ${humidity}%</p>
              </div>
          </div>
      `;
  } catch (error) {
      weatherInfoDiv.innerHTML = `<p class="error">Error: ${error.message}</p>`;
  }
};

// Event listener for the weather button
document.getElementById('get-weather-button').addEventListener('click', getWeather);

const chatMessages = document.querySelector('.chat-messages');
const userInput = document.querySelector('#user-input');
const sendButton = document.querySelector('#send-button');

// Chatbot functionality
let botResponses = {
  'hello': 'Hi! How can I assist you today?',
  'hi': 'Hello! What brings you here?',
  'how are you': 'I\'m doing great, thanks! How about you?',
  'what is your name': 'I\'m Chatbot, nice to meet you!',
  'default': 'I didn\'t understand that. Can you please say one of these words: hello, hi, how are you, what is your name?'
};

sendButton.addEventListener('click', () => {
  const userInputValue = userInput.value.trim().toLowerCase();
  let botResponse = botResponses.default;

  for (const key in botResponses) {
      if (userInputValue.includes(key)) {
          botResponse = botResponses[key];
          break;
      }
  }

  const userMessage = document.createElement('div');
  userMessage.className = 'message';
  userMessage.innerHTML = `<p>You: ${userInputValue}</p>`;
  chatMessages.appendChild(userMessage);

  const botMessage = document.createElement('div');
  botMessage.className = 'message';
  botMessage.innerHTML = `<p>Bot: ${botResponse}</p>`;
  chatMessages.appendChild(botMessage);

  userInput.value = '';
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

function validateForm(){
    let x=document.forms["myform"]["name"].value;
    if(x.toLowerCase()==="sadji"||x.toLowerCase()==="sadji zigadi")
    {
        alert("Welcome Mr Sadji!");
    }
    else
    {
        alert(`Hello ${x.toLowerCase()}!`);
    }
}
function darkmode() {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
    document.getElementById('button1').style.backgroundColor = randomColor;
    
  }

  const chatMessages = document.querySelector('.chat-messages');
  const userInput = document.querySelector('#user-input');
  const sendButton = document.querySelector('#send-button');
  
  let botResponses = {
      'hello': 'Hi! How can I assist you today?',
      'hi': 'Hello! What brings you here?',
      'how are you': 'I\'m doing great, thanks! How about you?',
      'what is your name': 'I\'m Chatbot, nice to meet you!',
      'default': 'I didn\'t understand that. Can you please say one of this words(hello,hi,how are you,what is your name)?'
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
      const timestamp = new Date();
      timestamp.setHours(timestamp.getHours() - 1);
      const formattedTimestamp = timestamp.toLocaleTimeString();
      userMessage.innerHTML = `<p>You: ${userInputValue} <span>(${formattedTimestamp})</span></p>`;
      botMessage.innerHTML = `<p>Bot: ${botResponse} <span>(${formattedTimestamp})</span></p>`;
  });


  
const onlineStatus = document.getElementById('onlineStatus');
const callButton = document.getElementById('callButton');
const muteButton = document.getElementById('muteButton');
const reportButton = document.getElementById('reportButton');
const autoCallButton = document.getElementById('autoCallButton');
const chatBox = document.getElementById('chatBox');
const sendMessage = document.getElementById('sendMessage');
const historyList = document.getElementById('historyList');
let isMuted = false;

// Mock online users count
let onlineUsers = 0;

// Update online status
setInterval(() => {
  onlineUsers = Math.floor(Math.random() * 100) + 1; // Simulating online users
  onlineStatus.textContent = `Online: ${onlineUsers}`;
}, 5000);

// Call button functionality
callButton.addEventListener('click', () => {
  alert('Connecting to a random user...');
  // Logic for WebRTC connection will go here
});

// Mute button functionality
muteButton.addEventListener('click', () => {
  isMuted = !isMuted;
  muteButton.textContent = isMuted ? 'Unmute' : 'Mute';
});

// Report button functionality
reportButton.addEventListener('click', () => {
  alert('User has been reported. Thank you!');
});

// Send message
sendMessage.addEventListener('click', () => {
  const message = chatBox.value;
  if (message.trim()) {
    const listItem = document.createElement('li');
    listItem.textContent = `You: ${message}`;
    historyList.appendChild(listItem);
    chatBox.value = '';
  }
});

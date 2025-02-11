const { io } = require("socket.io-client");
const socket_js = io();

function setupSocket() {
    
  const form = document.getElementById('form');
  const input = document.getElementById('input');
  const messages = document.getElementById('messages');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value) {
        socket_js.emit('chat message', input.value);
      input.value = '';
    }
  });

  socket_js.on('chat message', (msg) => {
    const item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
  });
}

module.exports = { socket_js, setupSocket };
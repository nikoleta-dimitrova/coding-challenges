const socket = io('http://localhost:3000')
const messageContainer= document.getElementById('container-message')
const messageForm = document.getElementById('send')
const messageInput = document.getElementById('message-input')

const userName = prompt('What is your name?')

function scrollToBottom() {
    var objDiv = document.getElementById("chat");
    objDiv.scrollTop = objDiv.scrollHeight;
}

appendMessage('You joined the chat')
socket.emit('new-user', userName)

socket.on('chat-message', data => {
    appendMessage(`${data.userName}: ${data.message}`)
    scrollToBottom()
})

socket.on('user-connected', userName => {
    appendMessage(`${userName} joined`)
    scrollToBottom()
})

socket.on('user-disconnected', userName => {
    appendMessage(`${userName} left`)
    scrollToBottom()
})

messageForm.addEventListener('submit', e =>{
    e.preventDefault()
    const message = messageInput.value 
    appendMessage(`You: ${message}`)
    socket.emit('send-chat-message', message)
    messageInput.value = ''
    scrollToBottom()
})

function appendMessage(message) {
    const messageElement = document.createElement('div')
    messageElement.innerText = message
    messageContainer.append(messageElement)
}
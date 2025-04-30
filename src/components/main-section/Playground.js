class Playground extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <section class="chat">
          <h2 class="chat-title">[ have a nice chat with web sockets ]</h2>
          <div class="chat-messages"></div>
          <div class="chat-inputs">
            <input type="text" class="chat-input" placeholder="what do you think?" />
            <button class="chat-send">!Send</button>
          </div>
        </section>
      `
    }

    connectedCallback() {
        const ws = new WebSocket('ws://localhost:3000')
        const messagesBox = this.querySelector('.chat-messages')
        const input = this.querySelector('.chat-input')
        const sendBtn = this.querySelector('.chat-send')

        function addMessage(text, type = '') {
            const div = document.createElement('div')
            div.className = `chat-message ${type}`
            div.textContent = text
            messagesBox.appendChild(div)
            messagesBox.scrollTop = messagesBox.scrollHeight
        }

        ws.onopen = () => addMessage('connection open', 'center')
        ws.onmessage = (event) => {
            setTimeout(() => {
                addMessage(event.data, 'server')
            }, 2000)
        };
        ws.onclose = () => addMessage('connection closed', 'center')
        ws.onerror = (e) => addMessage('ERRORE!!')

        sendBtn.addEventListener('click', () => {
            const text = input.value.trim()
            if (text) {
                ws.send(text)
                addMessage(text, 'me')
                input.value = ''
            }
            input.focus()
        })
    }
}

customElements.define("playground-section", Playground);
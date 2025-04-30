class Api extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = /*html*/ `
            <div class="list-container">
                <h2 class="list-status"></h2>
                <ul class="list"></ul>
            </div>
        `

        async function fetchData() {
            const listStatus = document.querySelector(".list-status")
            listStatus.textContent = "List is loading... we are waiting"
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                if (!response.ok) {
                    throw new Error(`ой ой ой ошибка! вот: ${response.status}`)
                }
                const data = await response.json()
                //console.log(data) //array of obj
                renderList(data)

            } catch (error) {
                console.log(error)
                listStatus.textContent = error.message
            }
        }

        function renderList(data) {
            const listStatus = document.querySelector(".list-status")
            const listContainer = document.querySelector(".list")
            listStatus.textContent = "List loaded"

            data.forEach(user => {
                const listItem = document.createElement("li")
                listItem.classList.add("user")

                listItem.innerHTML = /*html*/ `
                    <strong>${user.name}</strong> <br>
                    <span>Username: ${user.username}</span> <br>
                    <span>Email: ${user.email}</span> <br>
                    <span>Phone: ${user.phone}</span> 
                `
                listContainer.appendChild(listItem)
            })

        }
        fetchData()
    }

}
customElements.define("api-section", Api)
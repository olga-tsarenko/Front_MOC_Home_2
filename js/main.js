const formEl = document.getElementById('chat-form')

formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    const messageInput = formEl.querySelector('input');
    let list = document.querySelector('ul');
    let myListElem = document.createElement("li")

    myListElem.classList.add('main-section-chat-list-item');
    myListElem.innerHTML = messageInput.value;
    list.appendChild(myListElem);
    messageInput.value = "";
});
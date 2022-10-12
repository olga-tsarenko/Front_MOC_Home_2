const formEl = document.getElementById('chat-form')
const messagesList = document.querySelector('ul');
const messageInput = formEl.querySelector('input');
const myClose = document.getElementById('close_message')


formEl.addEventListener("submit", (e) => {

    e.preventDefault();

    const myListElem = document.createElement("li")
    myListElem.classList.add('main-section-chat-list-item');
    const myNewElem = (e) => {
        myListElem.innerHTML = `<p> ${e.value} </p>` + `<span class="remove-button" id="remove-button"></span>`;
    };

    myNewElem(messageInput);

    messagesList.appendChild(myListElem);
    messageInput.value = "";
});


const closeMyMessage = (event) => {
    if (event.target.className !== "remove-button") return;

    let myWrittenMessage = event.target.parentNode;

    myWrittenMessage.remove();
};

messagesList.addEventListener('click', closeMyMessage, false);
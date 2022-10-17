const formEl = document.getElementById('chat-form')
const messagesList = document.querySelector('ul');
const messageInput = formEl.querySelector('textarea');

const newElemContent = text => (`<p> ${text.replace("\n", "<br>")} </p>` + `<span class="remove-button" id="remove-button"></span>`);
const createNewMessage = () => {
    const myListElem = document.createElement("li");

    myListElem.classList.add('main-section-chat-list-item');
    myListElem.innerHTML = newElemContent(messageInput.value);
    messagesList.appendChild(myListElem);
    messageInput.value = "";

    myListElem.scrollIntoView();
}
const closeMyMessage = (event) => {
    if (event.target.className !== "remove-button") return;

    let myWrittenMessage = event.target.parentNode;

    myWrittenMessage.animate(
        {opacity: 0},
        {duration: 1000}
    )

    setTimeout(() => myWrittenMessage.remove(), 1000);
}

const logKey = (e) => {
    if (e.shiftKey && (e.keyCode === 13)) {
        return;
    }
    if ((e.keyCode === 13)) {
        e.preventDefault();

        createNewMessage();
    }
}

messageInput.addEventListener("keydown", logKey);

formEl.addEventListener("submit", e => {
    e.preventDefault();

    messageInput.value && createNewMessage();
});

messagesList.addEventListener('click', closeMyMessage, false);



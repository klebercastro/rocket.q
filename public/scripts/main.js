import Modal from './modal.js'

const modal = Modal();

const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p');
const modalButton = document.querySelector('.modal button');

const checkButtons = document.querySelectorAll('.actions a.check');
checkButtons.forEach(buttons => {
    buttons.addEventListener('click',handleClick);
});

const deleteButtons = document.querySelectorAll('.actions .delete');
deleteButtons.forEach(buttons => {
    buttons.addEventListener('click', event => handleClick(event, false))
});

function handleClick(event, check = true) {
    event.preventDefault();

    const text = check ? 'Marcar como lida' : 'Excluir';
    const slug = check ? 'check' : 'delete';

    const roomId = document.getElementById("room-id").dataset.id;
    const questionId = event.target.dataset.id;

    const form = document.querySelector('.modal form');
    form.setAttribute('action', `question/${roomId}/${questionId}/${slug}`);

    modalTitle.innerHTML = `${text} essa pergunta?`;
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} essa pergunta?`;
    modalButton.innerHTML = `Sim ${text.toLowerCase()}`;

    check ? modalButton.classList.remove('red') : modalButton.classList.add('red')

    modal.open()
;}
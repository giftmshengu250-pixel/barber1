const bookingForm = document.querySelector('#bookingForm');
let nameInput = document.querySelector('#nameInput');
let phoneNumber = document.querySelector('#phoneNumber');
let style = document.querySelector('#style');
let submitButton = document.querySelector('#submission');
const cardsList = document.querySelector('#cardsList');

let queue = [];

function displayQueue() {
    cardsList.innerHTML = '';
    queue.forEach(function (booking,index) {
        const card = document.createElement('div');

        card.innerHTML = `
    <span>#${index + 1}</span>
    <h3>${booking.name}</h3>
    <p>${booking.haircut}</p>
`;

cardsList.appendChild(card);

});

}

bookingForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const nameValue = nameInput.value;
    const phoneValue = phoneNumber.value;
    const styleValue = style.value;

    const booking = {
        name: nameValue,
        phone: phoneValue,
        haircut: styleValue
    };

    queue.push(booking);

    displayQueue();

    console.log(queue);
    
});
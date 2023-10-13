const form = document.getElementById('add-contact');
const tbody = document.getElementById('contact-del');
const contacts = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    addContact();
    attContact();

})

function addContact() {
    const inputNameContact = document.getElementById('name-contact');
    const inputNumberContact = document.getElementById('number-contact');

    const names = inputNameContact.value.trim();
    const numbers = inputNumberContact.value.trim();
        
    if (contacts.some(contact => contact.numbers === numbers)) {
        alert('Number already addded!');
        return;
    }

    const contact = {names, numbers};
    contacts.push(contact);
    
    let linha = '<tr>'
    linha += `<td>${inputNameContact.value}</td>`;
    linha += `<td>${inputNumberContact.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputNameContact.value = '';
    inputNumberContact.value = '';
}

function attContact() {
    const corpoContact = document.querySelector('tbody');
    corpoContact.innerHTML = linhas;
}

function createContacts () {
    let contactsContainer = document.createElement('div');
    
    let lhDiv = document.createElement('div');
    lhDiv.classList.add('map');
    lhDiv.classList.add('contacts-div')
    lhDiv.id = 'lh-contact';

    let rhDiv = document.createElement('div');
    rhDiv.classList.add('phone-address');
    rhDiv.classList.add('contacts-div')
    rhDiv.id = 'rh-contact';

    contactsContainer.appendChild(lhDiv);
    contactsContainer.appendChild(rhDiv);

    contactsContainer.id = 'pageContainer';
    contactsContainer.classList.add('contacts');
    return contactsContainer
}

function loadContacts () {
    let contentContainer = document.getElementById('content');

    let contactsContainer = createContacts();

    contentContainer.appendChild(contactsContainer);

}

export {loadContacts}
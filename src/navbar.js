function createNavBar () {
    let navContainer = document.createElement('nav');
    
    let homeDiv = document.createElement('div');
    let homeText = document.createElement('span');
    homeText.textContent = 'Joao Steak House';
    homeDiv.appendChild(homeText);

    let contactsDiv = document.createElement('div');
    let contactsText = document.createElement('span');
    contactsText.textContent = 'Contacts';
    contactsDiv.appendChild(contactsText);

    let aboutDiv = document.createElement('div');
    let aboutText = document.createElement('span');
    aboutText.textContent = 'About';
    aboutDiv.appendChild(aboutText);

    let menuDiv = document.createElement('div');
    let menuText = document.createElement('span');
    menuText.textContent = 'Menu';
    menuDiv.appendChild(menuText);

    let galleryDiv = document.createElement('div');
    let galleryText = document.createElement('span');
    galleryText.textContent = 'Gallery';
    galleryDiv.appendChild(galleryText);    

    navContainer.appendChild(contactsDiv);
    navContainer.appendChild(aboutText);
    navContainer.appendChild(homeDiv);
    navContainer.appendChild(menuDiv);
    navContainer.appendChild(galleryDiv);

    return navContainer
}

function loadNavBar () {
    let contentContainer = document.getElementById('content');

    let navContainer = createNavBar();

    contentContainer.appendChild(navContainer);
    
}

export {loadNavBar}
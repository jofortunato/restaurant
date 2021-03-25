function createNavBar () {
    let navContainer = document.createElement('nav');
    
    let homeDiv = createNavItem('Joao Steak House');
    let contactsDiv = createNavItem('Contacts');
    let aboutDiv = createNavItem('About');
    let menuDiv = createNavItem('Menu');
    let galleryDiv = createNavItem('Gallery');

    navContainer.appendChild(contactsDiv);
    navContainer.appendChild(aboutDiv);
    navContainer.appendChild(homeDiv);
    navContainer.appendChild(menuDiv);
    navContainer.appendChild(galleryDiv);

    return navContainer
}

function createNavItem (itemTextContent) {
    let navItem = document.createElement('div');
    let itemText = document.createElement('span');
    itemText.textContent = itemTextContent;
    navItem.appendChild(itemText);
    return navItem
}

function loadNavBar () {
    let contentContainer = document.getElementById('content');

    let navContainer = createNavBar();

    contentContainer.appendChild(navContainer);
    
}

export {loadNavBar}
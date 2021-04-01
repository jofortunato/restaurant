function createNavBar () {
    let navContainer = document.createElement('nav');
    
    let homeDiv = createNavItem('Joao Steak House', ["nav-item"]);
    let contactsDiv = createNavItem('Contacts', ["nav-item"]);
    let aboutDiv = createNavItem('About', ["nav-item"]);
    let menuDiv = createNavItem('Menu', ["nav-item"]);
    let galleryDiv = createNavItem('Gallery', ["nav-item"]);

    navContainer.appendChild(contactsDiv);
    navContainer.appendChild(aboutDiv);
    navContainer.appendChild(homeDiv);
    navContainer.appendChild(menuDiv);
    navContainer.appendChild(galleryDiv);

    navContainer.classList.add("nav-bar")
    return navContainer
}

function createNavItem (itemTextContent, itemClasses = []) {
    let navItem = document.createElement('div');
    let itemText = document.createElement('span');
    itemText.textContent = itemTextContent;
    navItem.appendChild(itemText);

    if (itemClasses.length !== 0) {
        navItem.classList.add(...itemClasses);
    }

    return navItem
}

function loadNavBar () {
    let contentContainer = document.getElementById('content');

    let navContainer = createNavBar();

    contentContainer.appendChild(navContainer);

}

export {loadNavBar}
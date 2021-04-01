function createHome () {
    let homeContainer = document.createElement('div');
    
    let mainTitle = document.createElement('p');
    mainTitle.textContent = 'ENJOY YOUR MEAL';
    mainTitle.classList.add('home-main-title');

    let secundaryTitle = document.createElement('p');
    secundaryTitle.textContent = 'Only the most fresh ingredients.';
    secundaryTitle.classList.add('home-secundary-title');

    let buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('home-btns-container');

    let bookNowBtn = document.createElement('button');
    bookNowBtn.textContent = 'BOOK NOW';
    bookNowBtn.classList.add('home-btn');
    bookNowBtn.id = 'book-now';
    let viewMenuBtn = document.createElement('button');
    viewMenuBtn.textContent = 'VIEW MENU';
    viewMenuBtn.classList.add('home-btn');
    viewMenuBtn.id = 'view-menu';

    buttonsContainer.appendChild(bookNowBtn);
    buttonsContainer.appendChild(viewMenuBtn);

    homeContainer.appendChild(mainTitle);
    homeContainer.appendChild(secundaryTitle);
    homeContainer.appendChild(buttonsContainer);

    homeContainer.id = 'home'
    return homeContainer
}

function loadHome () {
    let contentContainer = document.getElementById('content');

    let homeContainer = createHome();

    contentContainer.appendChild(homeContainer);

}

function deleteHome() {
    let homeContainer = document.getElementById('home');
    homeContainer.remove();
}

export {loadHome, deleteHome}
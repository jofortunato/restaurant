function createMenu () {
    let entries = ['Bread and Olives', 'Artisanal Goat Cheese', 'Beef Flat Ribs', 'Padrón Peppers', 'Joaos Croquette'];
    let mains = ['Black Angus Ribeye', 'Filet Mignon', 'Sirloin', 'Joaos Steak', 'Magret with Porto', 'Ribeye', 'New York Steak', 'Wagyu Sirloin', 'Grilled Octopus Legs'];
    let desserts = ['Apple Crumble', 'Cheesecake', ''];
    let drinks = ['Vallado', 'Beyra', 'Duvel', 'Chimay Blue', 'Pauwel Kwak', 'Leffe Blonde', 'Gin Mare', 'Martin Millers', 'Martini Rosso'];

    let menuContainer = document.createElement('div');
    menuContainer.id = 'pageContainer';
    menuContainer.classList.add('main-text-cointainer');
    menuContainer.classList.add('menu');
    
    let mainTitle = document.createElement('h1');
    mainTitle.textContent = 'MENU';
    mainTitle.classList.add('text-main-title');
    menuContainer.appendChild(mainTitle);

    let menu = document.createElement('div');
    menu.id = 'menu-field';

    let lhMenu = document.createElement('div');
    lhMenu.id = 'lh-menu';
    lhMenu.classList.add('menu-column');

    let entriesDiv = createMenuSection('Entries', entries);
    lhMenu.appendChild(entriesDiv);
    let mainsDiv = createMenuSection('Mains', mains);
    lhMenu.appendChild(mainsDiv);

    let rhMenu = document.createElement('div');
    rhMenu.id = 'rh-menu';
    rhMenu.classList.add('menu-column');

    let dessertsDiv = createMenuSection('Desserts', desserts);
    rhMenu.appendChild(dessertsDiv);
    let drinksDiv = createMenuSection('Drinks', drinks);
    rhMenu.appendChild(drinksDiv);

    menu.appendChild(lhMenu);
    menu.appendChild(rhMenu);

    menuContainer.appendChild(menu);

    
    return menuContainer;
}

function createMenuSection(title, dishes) {
    let sectionContainer = document.createElement('div');
    sectionContainer.classList.add('type-cont');

    let sectionTitle = document.createElement('h2');
    sectionTitle.textContent = title;
    sectionTitle.classList.add('type-title');
    sectionContainer.appendChild(sectionTitle);

    let sectionDishes = document.createElement('div');
    sectionDishes.classList.add('group-dishes');

    for (let i = 0; i < dishes.length; ++i) {
        let dishContainer = document.createElement('div');
        dishContainer.classList.add('dish')

        let dishName = document.createElement('h3');
        dishName.classList.add('dish-name')
        dishName.textContent = dishes[i];

        dishContainer.appendChild(dishName);
        sectionDishes.appendChild(dishContainer);
    }

    sectionContainer.appendChild(sectionDishes);

    return sectionContainer;
}

function loadMenu () {
    let contentContainer = document.getElementById('content');

    let menuContainer = createMenu();

    contentContainer.appendChild(menuContainer);

}

export {loadMenu}
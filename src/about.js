function createAbout () {
    let aboutContainer = document.createElement('div');
    
    let mainTitle = document.createElement('h1');
    mainTitle.textContent = 'ABOUT';
    mainTitle.classList.add('text-main-title');

    let aboutText = document.createElement('p');
    aboutText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium quidem non sint dolore ex ad commodi, repudiandae voluptatibus. Aliquid fugit doloribus error hic, nesciunt laborum nam dolore nostrum adipisci? Repudiandae amet aut, cupiditate nesciunt reiciendis, vero dolor, quisquam cum earum illum dolore mollitia? Numquam nostrum dolor nobis iusto, nam voluptatum tenetur nihil, nulla quo, suscipit fugit? Architecto recusandae sapiente aut placeat molestiae libero repudiandae eos consequatur itaque aperiam aspernatur, dolore deleniti magnam, adipisci doloremque facilis similique ab eveniet quod eligendi ipsam dignissimos nihil iste. Est obcaecati illum totam. Expedita, nemo. Facere doloribus, excepturi impedit unde ratione cumque repellendus voluptates exercitationem.'
    aboutText.classList.add('about-text');

    aboutContainer.appendChild(mainTitle);
    aboutContainer.appendChild(aboutText);

    aboutContainer.id = 'pageContainer';
    aboutContainer.classList.add('about');
    aboutContainer.classList.add('main-text-cointainer'); 
    return aboutContainer
}

function loadAbout () {
    let contentContainer = document.getElementById('content');

    let aboutContainer = createAbout();

    contentContainer.appendChild(aboutContainer);

}

export {loadAbout}
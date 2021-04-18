function createGallery () {
    let galleryContainer = document.createElement('div');

    let imagesContainer = document.createElement('div');
    imagesContainer.id = 'images-container';
    imagesContainer.classList.add('gallery');
    
    let imageContainer
    for (let i = 0; i < 24; ++i) {
        imageContainer = createImage(['image'], `image${i}`);
        imagesContainer.appendChild(imageContainer);
    }
    
    galleryContainer.appendChild(imagesContainer);
    galleryContainer.id = 'pageContainer';
    galleryContainer.classList.add('gallery-background');
    return galleryContainer
}

function createImage (itemClasses = [], itemID) {
    let imageItem = document.createElement('div');

    if (itemClasses.length !== 0) {
        imageItem.classList.add(...itemClasses);
    }

    imageItem.id = itemID;

    return imageItem
}

function loadGallery () {
    let contentContainer = document.getElementById('content');

    let galleryContainer = createGallery();

    contentContainer.appendChild(galleryContainer);

}

export {loadGallery}
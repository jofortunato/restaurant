function createGallery () {
    let galleryContainer = document.createElement('div');
    galleryContainer.id = 'pageContainer';
    galleryContainer.classList.add('gallery');

    let imageCache = {};
    function importAll(r) {
        r.keys().forEach((key, index) => {

            imageCache[index] = r(key)
        });
    }
    importAll(require.context('./images/gallery', false, /\.(png|jpe?g|svg)$/));

    let totalImages = 24;
    let numberOfColumns;
    let imagesPerColumn

    if (window.innerWidth < 480) {
        numberOfColumns = 1;
        imagesPerColumn = totalImages/numberOfColumns;
    }
    else if (window.innerWidth < 768) {
        numberOfColumns = 2;
        imagesPerColumn = totalImages/numberOfColumns;
    }
    else {
        numberOfColumns = 3;
        imagesPerColumn = totalImages/numberOfColumns;
    }

    for (let i = 0; i < numberOfColumns; ++i) {
        let column = createColumn(i, imagesPerColumn, imageCache);
        galleryContainer.appendChild(column);
    }

    return galleryContainer
}

function createColumn (columnNumber, imagesPerColumn, imageCache) {
    let galleryColumn = document.createElement('div');
    galleryColumn.classList.add('gallery-column');
    galleryColumn.id = `column-${columnNumber}`;

    for (let i = 0; i < imagesPerColumn; ++i) {
        let figureElement = createFigure(imageCache[i+imagesPerColumn*columnNumber]);
        galleryColumn.appendChild(figureElement);
    }

    return galleryColumn
}

function createFigure (figure) {
    let figureElement = document.createElement('img');
    figureElement.classList.add('gallery-image');
    figureElement.src = figure
    console.log(figure)
    return figureElement    
}

function loadGallery () {
    let contentContainer = document.getElementById('content');

    let galleryContainer = createGallery();

    contentContainer.appendChild(galleryContainer);

}

export {loadGallery} 
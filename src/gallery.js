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
    let gridLayout = getNumberOfColumns(totalImages);

    galleryContainer = addColumns(galleryContainer, gridLayout, imageCache);

    window.addEventListener('resize', () => {
        let totalImages = 24;
        let newGridLayout = getNumberOfColumns(totalImages);

        let existingColumns = document.getElementsByClassName('gallery-column');

        if (newGridLayout.numberOfColumns !== existingColumns.length) {

            let gallery = document.getElementById('pageContainer');
            gallery.remove();

            let newGalleryContainer = document.createElement('div');
            newGalleryContainer.id = 'pageContainer';
            newGalleryContainer.classList.add('gallery');

            newGalleryContainer = addColumns(newGalleryContainer,newGridLayout,imageCache);
            let contentContainer = document.getElementById('content');
            contentContainer.appendChild(newGalleryContainer);
        }
    }, false);

    return galleryContainer
}

function getNumberOfColumns (numberOfImages) {
    let numberOfColumns;
    let imagesPerColumn;

    if (window.innerWidth < 480) {
        numberOfColumns = 1;
    }
    else if (window.innerWidth < 768) {
        numberOfColumns = 2;
    }
    else {
        numberOfColumns = 3;
    }

    imagesPerColumn = numberOfImages/numberOfColumns;

    return {numberOfColumns, imagesPerColumn};
}

function addColumns (galleryContainer, gridLayout, imageCache) {
    for (let i = 0; i < gridLayout.numberOfColumns; ++i) {
        let column = createColumn(i, gridLayout.imagesPerColumn, imageCache);
        galleryContainer.appendChild(column);
    }

    galleryContainer.style = `--number-columns: ${gridLayout.numberOfColumns};`

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

    return figureElement    
}

function loadGallery () {
    let contentContainer = document.getElementById('content');

    let galleryContainer = createGallery();

    contentContainer.appendChild(galleryContainer);

}

export {loadGallery} 
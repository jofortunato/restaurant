// Initialize and add the map
function initMap() {
    // The location
    const mapCenter = { lat: 39.223, lng: -8.679 };

    // The map, centered at ...
    if (!!document.getElementById('lh-contact')) {
        const map = new google.maps.Map(document.getElementById('lh-contact'), {
        zoom: 15,
        center: mapCenter,
        });

        // The marker, positioned at ...
        const marker = new google.maps.Marker({
        position: mapCenter,
        map: map,
        });
    }
}
    window.initMap = initMap;

export {initMap};
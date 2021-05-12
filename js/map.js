mapboxgl.accessToken =
    'pk.eyJ1Ijoic3VuZ2phaCIsImEiOiJja25hMmpocDAwOWpsMndtaTRoanAzNXYwIn0.IxR5TqT3_wnNcwW33kKlkA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11'
});
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([-123.116226, 49.246292])
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: center,
        zoom: 16.5
    })

    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)
}
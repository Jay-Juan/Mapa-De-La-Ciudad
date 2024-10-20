var map = L.map('map').setView([-34.82627750739202, -56.172242677109054], 11);
//-34.856338172884705, 
L.tileLayer('https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=th1B7ltIffQzw1VZAQcG', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
}).addTo(map);

function getData() {
    const response = fetch('./liceos.json')
        .then(response => response.json())
        .then(data => createMarker(data))
}

function createMarker(data) {
    data["liceos"].forEach(object => {
        L.marker([object.latitud, object.longitud],).addTo(map).bindPopup("<b>" + object.nombreCompleto + "</b>" + "<br><br>" + object.descripcion +"<br><br><a href='"+ object.link +"'>Saber más sobre "+ object.agregado +" "+ object.lugar + " " + object.nombre +"</a>");
    });

}

document.addEventListener("DOMContentLoaded", () => {
    getData()
})
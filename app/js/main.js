var mymap = L.map('map').setView([59.926, 10.743], 13);

var tileLayer = L.tileLayer('https://api.mapbox.com/styles/v1/trygvebw/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Test',
    maxZoom: 18,
    id: 'cimc8pb0t00dcbolzxqv57g0d',
    accessToken: appSettings.mapboxAccessToken
});

var heatLayer = L.heatLayer([
    [59.912, 10.743, 1.0],
    [59.912, 10.753, 1.0],
    [59.912, 10.763, 1.0],
    [59.912, 10.773, 1.0],
    [59.912, 10.783, 1.0],
    [59.912, 10.793, 1.0],
    [59.912, 10.803, 1.0]
], {
	radius: 15,
	blur: 20,
	minOpacity: 0.8
});

mymap.addLayer(tileLayer);
mymap.addLayer(heatLayer);
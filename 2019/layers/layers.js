var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_2019_0 = new ol.format.GeoJSON();
var features_2019_0 = format_2019_0.readFeatures(json_2019_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2019_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_2019_0.addFeatures(features_2019_0);var lyr_2019_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2019_0, 
                style: style_2019_0,
    title: '2019<br />\
    <img src="styles/legend/2019_0_0.png" /> Tidak Padat<br />\
    <img src="styles/legend/2019_0_1.png" /> Cukup Padat<br />\
    <img src="styles/legend/2019_0_2.png" /> Padat<br />\
    <img src="styles/legend/2019_0_3.png" /> Sangat Padat<br />'
        });

lyr_2019_0.setVisible(true);
var layersList = [baseLayer,lyr_2019_0];
lyr_2019_0.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'Penduduk': 'Penduduk', });
lyr_2019_0.set('fieldImages', {'Kecamatan': 'TextEdit', 'Penduduk': 'TextEdit', });
lyr_2019_0.set('fieldLabels', {'Kecamatan': 'inline label', 'Penduduk': 'inline label', });
lyr_2019_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
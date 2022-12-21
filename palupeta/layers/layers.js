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
var format_KotaPalu_0 = new ol.format.GeoJSON();
var features_KotaPalu_0 = format_KotaPalu_0.readFeatures(json_KotaPalu_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaPalu_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_KotaPalu_0.addFeatures(features_KotaPalu_0);var lyr_KotaPalu_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KotaPalu_0, 
                style: style_KotaPalu_0,
    title: 'Kota Palu<br />\
    <img src="styles/legend/KotaPalu_0_0.png" /> Mantikulore<br />\
    <img src="styles/legend/KotaPalu_0_1.png" /> Palu Barat<br />\
    <img src="styles/legend/KotaPalu_0_2.png" /> Palu Selatan<br />\
    <img src="styles/legend/KotaPalu_0_3.png" /> Palu Timur<br />\
    <img src="styles/legend/KotaPalu_0_4.png" /> Palu Utara<br />\
    <img src="styles/legend/KotaPalu_0_5.png" /> Tatanga<br />\
    <img src="styles/legend/KotaPalu_0_6.png" /> Tawaeli<br />\
    <img src="styles/legend/KotaPalu_0_7.png" /> Ulujadi<br />'
        });

lyr_KotaPalu_0.setVisible(true);
var layersList = [baseLayer,lyr_KotaPalu_0];
lyr_KotaPalu_0.set('fieldAliases', {'Kecamatan': 'Kecamatan', });
lyr_KotaPalu_0.set('fieldImages', {'Kecamatan': 'TextEdit', });
lyr_KotaPalu_0.set('fieldLabels', {'Kecamatan': 'inline label', });
lyr_KotaPalu_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
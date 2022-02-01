var wms_layers = [];

var format_PasayCity_0 = new ol.format.GeoJSON();
var features_PasayCity_0 = format_PasayCity_0.readFeatures(json_PasayCity_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PasayCity_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PasayCity_0.addFeatures(features_PasayCity_0);
var lyr_PasayCity_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PasayCity_0, 
                style: style_PasayCity_0,
                interactive: true,
    title: 'Pasay City<br />\
    <img src="styles/legend/PasayCity_0_0.png" /> 257 - 855<br />\
    <img src="styles/legend/PasayCity_0_1.png" /> 855 - 1327<br />\
    <img src="styles/legend/PasayCity_0_2.png" /> 1327 - 1827<br />\
    <img src="styles/legend/PasayCity_0_3.png" /> 1827 - 2503<br />\
    <img src="styles/legend/PasayCity_0_4.png" /> 2503 - 3544<br />\
    <img src="styles/legend/PasayCity_0_5.png" /> 3544 - 5088<br />\
    <img src="styles/legend/PasayCity_0_6.png" /> 5088 - 6692<br />\
    <img src="styles/legend/PasayCity_0_7.png" /> 6692 - 14209<br />\
    <img src="styles/legend/PasayCity_0_8.png" /> 14209 - 19788<br />\
    <img src="styles/legend/PasayCity_0_9.png" /> 19788 - 37372<br />'
        });

lyr_PasayCity_0.setVisible(true);
var layersList = [lyr_PasayCity_0];
lyr_PasayCity_0.set('fieldAliases', {'City': 'City', 'Barangay': 'Barangay', 'Population': 'Population', });
lyr_PasayCity_0.set('fieldImages', {'City': 'TextEdit', 'Barangay': 'TextEdit', 'Population': 'Range', });
lyr_PasayCity_0.set('fieldLabels', {'City': 'inline label', 'Barangay': 'inline label', 'Population': 'inline label', });
lyr_PasayCity_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
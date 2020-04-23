var wms_layers = [];

        var lyr_GoogleStreets_0 = new ol.layer.Tile({
            'title': 'GoogleStreets_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });var format_Test_1 = new ol.format.GeoJSON();
var features_Test_1 = format_Test_1.readFeatures(json_Test_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Test_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Test_1.addFeatures(features_Test_1);var lyr_Test_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Test_1, 
                style: style_Test_1,
                title: '<img src="styles/legend/Test_1.png" /> Test'
            });

lyr_GoogleStreets_0.setVisible(true);lyr_Test_1.setVisible(true);
var layersList = [lyr_GoogleStreets_0,lyr_Test_1];
lyr_Test_1.set('fieldAliases', {'Name': 'Name', 'Longtitude': 'Longtitude', 'Latitude': 'Latitude', 'Town': 'Town', 'Photo': 'Photo', });
lyr_Test_1.set('fieldImages', {'Name': 'Hidden', 'Longtitude': 'Hidden', 'Latitude': 'Hidden', 'Town': 'Hidden', 'Photo': 'TextEdit', });
lyr_Test_1.set('fieldLabels', {'Photo': 'no label', });
lyr_Test_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
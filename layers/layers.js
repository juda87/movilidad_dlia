var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_movilidadauto_80_1 = new ol.format.GeoJSON();
var features_movilidadauto_80_1 = format_movilidadauto_80_1.readFeatures(json_movilidadauto_80_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_movilidadauto_80_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_movilidadauto_80_1.addFeatures(features_movilidadauto_80_1);
var lyr_movilidadauto_80_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_movilidadauto_80_1, 
                style: style_movilidadauto_80_1,
                interactive: true,
                title: '<img src="styles/legend/movilidadauto_80_1.png" /> movilidad auto_80'
            });
var format_movilidadauto_60_2 = new ol.format.GeoJSON();
var features_movilidadauto_60_2 = format_movilidadauto_60_2.readFeatures(json_movilidadauto_60_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_movilidadauto_60_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_movilidadauto_60_2.addFeatures(features_movilidadauto_60_2);
var lyr_movilidadauto_60_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_movilidadauto_60_2, 
                style: style_movilidadauto_60_2,
                interactive: true,
                title: '<img src="styles/legend/movilidadauto_60_2.png" /> movilidad auto_60'
            });
var format_movilidadauto_30_3 = new ol.format.GeoJSON();
var features_movilidadauto_30_3 = format_movilidadauto_30_3.readFeatures(json_movilidadauto_30_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_movilidadauto_30_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_movilidadauto_30_3.addFeatures(features_movilidadauto_30_3);
var lyr_movilidadauto_30_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_movilidadauto_30_3, 
                style: style_movilidadauto_30_3,
                interactive: true,
                title: '<img src="styles/legend/movilidadauto_30_3.png" /> movilidad auto_30'
            });
var format_movilidadauto_15_4 = new ol.format.GeoJSON();
var features_movilidadauto_15_4 = format_movilidadauto_15_4.readFeatures(json_movilidadauto_15_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_movilidadauto_15_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_movilidadauto_15_4.addFeatures(features_movilidadauto_15_4);
var lyr_movilidadauto_15_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_movilidadauto_15_4, 
                style: style_movilidadauto_15_4,
                interactive: true,
                title: '<img src="styles/legend/movilidadauto_15_4.png" /> movilidad auto_15'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_movilidadauto_80_1.setVisible(true);lyr_movilidadauto_60_2.setVisible(true);lyr_movilidadauto_30_3.setVisible(true);lyr_movilidadauto_15_4.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_movilidadauto_80_1,lyr_movilidadauto_60_2,lyr_movilidadauto_30_3,lyr_movilidadauto_15_4];
lyr_movilidadauto_80_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'prop_is_only_walking': 'prop_is_only_walking', });
lyr_movilidadauto_60_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'prop_is_only_walking': 'prop_is_only_walking', });
lyr_movilidadauto_30_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'prop_is_only_walking': 'prop_is_only_walking', });
lyr_movilidadauto_15_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'prop_is_only_walking': 'prop_is_only_walking', });
lyr_movilidadauto_80_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'prop_is_only_walking': 'TextEdit', });
lyr_movilidadauto_60_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'prop_is_only_walking': 'TextEdit', });
lyr_movilidadauto_30_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'prop_is_only_walking': 'TextEdit', });
lyr_movilidadauto_15_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'prop_is_only_walking': 'TextEdit', });
lyr_movilidadauto_80_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'prop_is_only_walking': 'no label', });
lyr_movilidadauto_60_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'prop_is_only_walking': 'no label', });
lyr_movilidadauto_30_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'prop_is_only_walking': 'no label', });
lyr_movilidadauto_15_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'prop_is_only_walking': 'no label', });
lyr_movilidadauto_15_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
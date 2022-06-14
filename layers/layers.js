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
var format_movilidadcycle_60_1 = new ol.format.GeoJSON();
var features_movilidadcycle_60_1 = format_movilidadcycle_60_1.readFeatures(json_movilidadcycle_60_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_movilidadcycle_60_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_movilidadcycle_60_1.addFeatures(features_movilidadcycle_60_1);
var lyr_movilidadcycle_60_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_movilidadcycle_60_1, 
                style: style_movilidadcycle_60_1,
                interactive: true,
                title: '<img src="styles/legend/movilidadcycle_60_1.png" /> movilidad — cycle_60'
            });
var format_movilidadcycle_45_2 = new ol.format.GeoJSON();
var features_movilidadcycle_45_2 = format_movilidadcycle_45_2.readFeatures(json_movilidadcycle_45_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_movilidadcycle_45_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_movilidadcycle_45_2.addFeatures(features_movilidadcycle_45_2);
var lyr_movilidadcycle_45_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_movilidadcycle_45_2, 
                style: style_movilidadcycle_45_2,
                interactive: true,
                title: '<img src="styles/legend/movilidadcycle_45_2.png" /> movilidad — cycle_45'
            });
var format_movilidadcycle_30_3 = new ol.format.GeoJSON();
var features_movilidadcycle_30_3 = format_movilidadcycle_30_3.readFeatures(json_movilidadcycle_30_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_movilidadcycle_30_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_movilidadcycle_30_3.addFeatures(features_movilidadcycle_30_3);
var lyr_movilidadcycle_30_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_movilidadcycle_30_3, 
                style: style_movilidadcycle_30_3,
                interactive: true,
                title: '<img src="styles/legend/movilidadcycle_30_3.png" /> movilidad — cycle_30'
            });
var format_movilidadcycle_15_4 = new ol.format.GeoJSON();
var features_movilidadcycle_15_4 = format_movilidadcycle_15_4.readFeatures(json_movilidadcycle_15_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_movilidadcycle_15_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_movilidadcycle_15_4.addFeatures(features_movilidadcycle_15_4);
var lyr_movilidadcycle_15_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_movilidadcycle_15_4, 
                style: style_movilidadcycle_15_4,
                interactive: true,
                title: '<img src="styles/legend/movilidadcycle_15_4.png" /> movilidad — cycle_15'
            });
var format_movilidadauto_80_5 = new ol.format.GeoJSON();
var features_movilidadauto_80_5 = format_movilidadauto_80_5.readFeatures(json_movilidadauto_80_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_movilidadauto_80_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_movilidadauto_80_5.addFeatures(features_movilidadauto_80_5);
var lyr_movilidadauto_80_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_movilidadauto_80_5, 
                style: style_movilidadauto_80_5,
                interactive: true,
                title: '<img src="styles/legend/movilidadauto_80_5.png" /> movilidad auto_80'
            });
var format_movilidadauto_60_6 = new ol.format.GeoJSON();
var features_movilidadauto_60_6 = format_movilidadauto_60_6.readFeatures(json_movilidadauto_60_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_movilidadauto_60_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_movilidadauto_60_6.addFeatures(features_movilidadauto_60_6);
var lyr_movilidadauto_60_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_movilidadauto_60_6, 
                style: style_movilidadauto_60_6,
                interactive: true,
                title: '<img src="styles/legend/movilidadauto_60_6.png" /> movilidad auto_60'
            });
var format_movilidadauto_30_7 = new ol.format.GeoJSON();
var features_movilidadauto_30_7 = format_movilidadauto_30_7.readFeatures(json_movilidadauto_30_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_movilidadauto_30_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_movilidadauto_30_7.addFeatures(features_movilidadauto_30_7);
var lyr_movilidadauto_30_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_movilidadauto_30_7, 
                style: style_movilidadauto_30_7,
                interactive: true,
                title: '<img src="styles/legend/movilidadauto_30_7.png" /> movilidad auto_30'
            });
var format_movilidadauto_15_8 = new ol.format.GeoJSON();
var features_movilidadauto_15_8 = format_movilidadauto_15_8.readFeatures(json_movilidadauto_15_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_movilidadauto_15_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_movilidadauto_15_8.addFeatures(features_movilidadauto_15_8);
var lyr_movilidadauto_15_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_movilidadauto_15_8, 
                style: style_movilidadauto_15_8,
                interactive: true,
                title: '<img src="styles/legend/movilidadauto_15_8.png" /> movilidad auto_15'
            });
var format_rutas_9 = new ol.format.GeoJSON();
var features_rutas_9 = format_rutas_9.readFeatures(json_rutas_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rutas_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rutas_9.addFeatures(features_rutas_9);
var lyr_rutas_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rutas_9, 
                style: style_rutas_9,
                interactive: true,
                title: '<img src="styles/legend/rutas_9.png" /> rutas'
            });
var format_Domicilios_10 = new ol.format.GeoJSON();
var features_Domicilios_10 = format_Domicilios_10.readFeatures(json_Domicilios_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Domicilios_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Domicilios_10.addFeatures(features_Domicilios_10);
var lyr_Domicilios_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Domicilios_10, 
                style: style_Domicilios_10,
                interactive: true,
                title: '<img src="styles/legend/Domicilios_10.png" /> Domicilios'
            });
var format_ParqueIndSantoDomingo_11 = new ol.format.GeoJSON();
var features_ParqueIndSantoDomingo_11 = format_ParqueIndSantoDomingo_11.readFeatures(json_ParqueIndSantoDomingo_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParqueIndSantoDomingo_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueIndSantoDomingo_11.addFeatures(features_ParqueIndSantoDomingo_11);
var lyr_ParqueIndSantoDomingo_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ParqueIndSantoDomingo_11, 
                style: style_ParqueIndSantoDomingo_11,
                interactive: true,
                title: '<img src="styles/legend/ParqueIndSantoDomingo_11.png" /> Parque Ind. Santo Domingo'
            });
var group_Automovil = new ol.layer.Group({
                                layers: [lyr_movilidadauto_80_5,lyr_movilidadauto_60_6,lyr_movilidadauto_30_7,lyr_movilidadauto_15_8,],
                                title: "Automovil"});
var group_Bicicleta = new ol.layer.Group({
                                layers: [lyr_movilidadcycle_60_1,lyr_movilidadcycle_45_2,lyr_movilidadcycle_30_3,lyr_movilidadcycle_15_4,],
                                title: "Bicicleta"});
var group_MapaBase = new ol.layer.Group({
                                layers: [lyr_GoogleRoad_0,],
                                title: "Mapa Base"});

lyr_GoogleRoad_0.setVisible(true);lyr_movilidadcycle_60_1.setVisible(true);lyr_movilidadcycle_45_2.setVisible(true);lyr_movilidadcycle_30_3.setVisible(true);lyr_movilidadcycle_15_4.setVisible(true);lyr_movilidadauto_80_5.setVisible(true);lyr_movilidadauto_60_6.setVisible(true);lyr_movilidadauto_30_7.setVisible(true);lyr_movilidadauto_15_8.setVisible(true);lyr_rutas_9.setVisible(true);lyr_Domicilios_10.setVisible(true);lyr_ParqueIndSantoDomingo_11.setVisible(true);
var layersList = [group_MapaBase,group_Bicicleta,group_Automovil,lyr_rutas_9,lyr_Domicilios_10,lyr_ParqueIndSantoDomingo_11];
lyr_movilidadcycle_60_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'prop_is_only_walking': 'prop_is_only_walking', });
lyr_movilidadcycle_45_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'prop_is_only_walking': 'prop_is_only_walking', });
lyr_movilidadcycle_30_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'prop_is_only_walking': 'prop_is_only_walking', });
lyr_movilidadcycle_15_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'prop_is_only_walking': 'prop_is_only_walking', });
lyr_movilidadauto_80_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'prop_is_only_walking': 'prop_is_only_walking', });
lyr_movilidadauto_60_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'prop_is_only_walking': 'prop_is_only_walking', });
lyr_movilidadauto_30_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'prop_is_only_walking': 'prop_is_only_walking', });
lyr_movilidadauto_15_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'prop_is_only_walking': 'prop_is_only_walking', });
lyr_rutas_9.set('fieldAliases', {'fid': 'fid', 'search_id': 'search_id', 'location_id': 'location_id', 'part_id': 'part_id', 'part_type': 'part_type', 'part_mode': 'part_mode', 'part_directions': 'part_directions', 'part_distance': 'part_distance', 'part_travel_time': 'part_travel_time', 'layer': 'layer', 'path': 'path', });
lyr_Domicilios_10.set('fieldAliases', {'fid': 'fid', 'field_1': 'field_1', 'id': 'id', 'munixcipio': 'munixcipio', 'Barrio': 'Barrio', 'Muni...Barrio': 'Muni...Barrio', 'Y': 'Y', 'X': 'X', });
lyr_ParqueIndSantoDomingo_11.set('fieldAliases', {'fid': 'fid', });
lyr_movilidadcycle_60_1.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'prop_is_only_walking': 'TextEdit', });
lyr_movilidadcycle_45_2.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'prop_is_only_walking': 'TextEdit', });
lyr_movilidadcycle_30_3.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'prop_is_only_walking': 'TextEdit', });
lyr_movilidadcycle_15_4.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'prop_is_only_walking': 'TextEdit', });
lyr_movilidadauto_80_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'prop_is_only_walking': 'TextEdit', });
lyr_movilidadauto_60_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'prop_is_only_walking': 'TextEdit', });
lyr_movilidadauto_30_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'prop_is_only_walking': 'TextEdit', });
lyr_movilidadauto_15_8.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'prop_is_only_walking': 'TextEdit', });
lyr_rutas_9.set('fieldImages', {'fid': 'TextEdit', 'search_id': 'TextEdit', 'location_id': 'TextEdit', 'part_id': 'Range', 'part_type': 'TextEdit', 'part_mode': 'TextEdit', 'part_directions': 'TextEdit', 'part_distance': 'Range', 'part_travel_time': 'Range', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Domicilios_10.set('fieldImages', {'fid': 'TextEdit', 'field_1': 'Range', 'id': 'Range', 'munixcipio': 'TextEdit', 'Barrio': 'TextEdit', 'Muni...Barrio': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_ParqueIndSantoDomingo_11.set('fieldImages', {'fid': 'TextEdit', });
lyr_movilidadcycle_60_1.set('fieldLabels', {});
lyr_movilidadcycle_45_2.set('fieldLabels', {});
lyr_movilidadcycle_30_3.set('fieldLabels', {});
lyr_movilidadcycle_15_4.set('fieldLabels', {});
lyr_movilidadauto_80_5.set('fieldLabels', {});
lyr_movilidadauto_60_6.set('fieldLabels', {});
lyr_movilidadauto_30_7.set('fieldLabels', {});
lyr_movilidadauto_15_8.set('fieldLabels', {});
lyr_rutas_9.set('fieldLabels', {'fid': 'no label', 'search_id': 'no label', 'location_id': 'no label', 'part_id': 'no label', 'part_type': 'no label', 'part_mode': 'no label', 'part_directions': 'no label', 'part_distance': 'no label', 'part_travel_time': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Domicilios_10.set('fieldLabels', {'fid': 'no label', 'field_1': 'no label', 'id': 'no label', 'munixcipio': 'no label', 'Barrio': 'no label', 'Muni...Barrio': 'no label', 'Y': 'no label', 'X': 'no label', });
lyr_ParqueIndSantoDomingo_11.set('fieldLabels', {'fid': 'no label', });
lyr_ParqueIndSantoDomingo_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_hlpn_comuna_1 = new ol.format.GeoJSON();
var features_hlpn_comuna_1 = format_hlpn_comuna_1.readFeatures(json_hlpn_comuna_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hlpn_comuna_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hlpn_comuna_1.addFeatures(features_hlpn_comuna_1);
var lyr_hlpn_comuna_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hlpn_comuna_1, 
                style: style_hlpn_comuna_1,
                popuplayertitle: 'hlpn_comuna',
                interactive: true,
                title: '<img src="styles/legend/hlpn_comuna_1.png" /> hlpn_comuna'
            });
var format_interseccion_buffer_2 = new ol.format.GeoJSON();
var features_interseccion_buffer_2 = format_interseccion_buffer_2.readFeatures(json_interseccion_buffer_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_interseccion_buffer_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_interseccion_buffer_2.addFeatures(features_interseccion_buffer_2);
var lyr_interseccion_buffer_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_interseccion_buffer_2, 
                style: style_interseccion_buffer_2,
                popuplayertitle: 'interseccion_buffer',
                interactive: true,
    title: 'interseccion_buffer<br />\
    <img src="styles/legend/interseccion_buffer_2_0.png" /> 0 - 13<br />\
    <img src="styles/legend/interseccion_buffer_2_1.png" /> 13 - 37<br />\
    <img src="styles/legend/interseccion_buffer_2_2.png" /> 37 - 56<br />\
    <img src="styles/legend/interseccion_buffer_2_3.png" /> 56 - 81<br />\
    <img src="styles/legend/interseccion_buffer_2_4.png" /> 81 - 846<br />' });
var format_hlpn_paraderos_3 = new ol.format.GeoJSON();
var features_hlpn_paraderos_3 = format_hlpn_paraderos_3.readFeatures(json_hlpn_paraderos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hlpn_paraderos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hlpn_paraderos_3.addFeatures(features_hlpn_paraderos_3);
var lyr_hlpn_paraderos_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hlpn_paraderos_3, 
                style: style_hlpn_paraderos_3,
                popuplayertitle: 'hlpn_paraderos',
                interactive: true,
                title: '<img src="styles/legend/hlpn_paraderos_3.png" /> hlpn_paraderos'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_hlpn_comuna_1.setVisible(true);lyr_interseccion_buffer_2.setVisible(true);lyr_hlpn_paraderos_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_hlpn_comuna_1,lyr_interseccion_buffer_2,lyr_hlpn_paraderos_3];
lyr_hlpn_comuna_1.set('fieldAliases', {'objectid': 'objectid', 'shape_leng': 'shape_leng', 'dis_elec': 'dis_elec', 'cir_sena': 'cir_sena', 'cod_comuna': 'cod_comuna', 'codregion': 'codregion', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', 'Region': 'Region', 'Comuna': 'Comuna', 'Provincia': 'Provincia', });
lyr_interseccion_buffer_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'CUT': 'CUT', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'NOMBRE_DIS': 'NOMBRE_DIS', 'CODIGO_DIS': 'CODIGO_DIS', 'MANZENT': 'MANZENT', 'ZONA_CENSA': 'ZONA_CENSA', 'MANZANA': 'MANZANA', 'TOTAL_PERS': 'TOTAL_PERS', 'TOTAL_HOMB': 'TOTAL_HOMB', 'TOTAL_MUJE': 'TOTAL_MUJE', 'PERSONAS_0': 'PERSONAS_0', 'PERSONAS_6': 'PERSONAS_6', 'PERSONAS_1': 'PERSONAS_1', 'PERSONAS_M': 'PERSONAS_M', 'PERSONAS_E': 'PERSONAS_E', 'PUEBLOS_IN': 'PUEBLOS_IN', 'TOTAL_VIV_': 'TOTAL_VIV_', 'TOTAL_VIV1': 'TOTAL_VIV1', 'VIV_OCUPA_': 'VIV_OCUPA_', 'TOTAL_VIVI': 'TOTAL_VIVI', 'CANTIDAD_H': 'CANTIDAD_H', 'VIV_TIPO_C': 'VIV_TIPO_C', 'VIV_TIPO_D': 'VIV_TIPO_D', 'VIV_TIPO_T': 'VIV_TIPO_T', 'VIV_TIPO_P': 'VIV_TIPO_P', 'VIV_TIPO_M': 'VIV_TIPO_M', 'VIV_TIPO_1': 'VIV_TIPO_1', 'VIV_TIPO_O': 'VIV_TIPO_O', 'VIV_PARED_': 'VIV_PARED_', 'VIV_PARED1': 'VIV_PARED1', 'VIV_PARE_1': 'VIV_PARE_1', 'VIV_PARE_2': 'VIV_PARE_2', 'VIV_PARE_3': 'VIV_PARE_3', 'VIV_PARE_4': 'VIV_PARE_4', 'VIV_TECHO_': 'VIV_TECHO_', 'VIV_TECHO1': 'VIV_TECHO1', 'VIV_TECH_1': 'VIV_TECH_1', 'VIV_TECH_2': 'VIV_TECH_2', 'VIV_TECH_3': 'VIV_TECH_3', 'VIV_TECH_4': 'VIV_TECH_4', 'VIV_TECH_5': 'VIV_TECH_5', 'VIV_PISO_P': 'VIV_PISO_P', 'VIV_PISO_R': 'VIV_PISO_R', 'VIV_PISO_B': 'VIV_PISO_B', 'VIV_PISO_C': 'VIV_PISO_C', 'VIV_PISO_T': 'VIV_PISO_T', 'VIV_MATERI': 'VIV_MATERI', 'VIV_MATE_1': 'VIV_MATE_1', 'VIV_MATE_2': 'VIV_MATE_2', 'VIV_AGUA_R': 'VIV_AGUA_R', 'VIV_AGUA_P': 'VIV_AGUA_P', 'VIV_AGUA_C': 'VIV_AGUA_C', 'VIV_AGUA_1': 'VIV_AGUA_1', 'Pob_Estima': 'Pob_Estima', 'area_total': 'area_total', 'Pob_cubier': 'Población Cubierta', });
lyr_hlpn_paraderos_3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_hlpn_comuna_1.set('fieldImages', {'objectid': 'TextEdit', 'shape_leng': 'TextEdit', 'dis_elec': 'Range', 'cir_sena': 'Range', 'cod_comuna': 'Range', 'codregion': 'Range', 'st_area_sh': 'TextEdit', 'st_length_': 'TextEdit', 'Region': 'TextEdit', 'Comuna': 'TextEdit', 'Provincia': 'TextEdit', });
lyr_interseccion_buffer_2.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'CUT': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'NOMBRE_DIS': 'TextEdit', 'CODIGO_DIS': 'TextEdit', 'MANZENT': 'TextEdit', 'ZONA_CENSA': 'TextEdit', 'MANZANA': 'TextEdit', 'TOTAL_PERS': 'TextEdit', 'TOTAL_HOMB': 'TextEdit', 'TOTAL_MUJE': 'TextEdit', 'PERSONAS_0': 'TextEdit', 'PERSONAS_6': 'TextEdit', 'PERSONAS_1': 'TextEdit', 'PERSONAS_M': 'TextEdit', 'PERSONAS_E': 'TextEdit', 'PUEBLOS_IN': 'TextEdit', 'TOTAL_VIV_': 'TextEdit', 'TOTAL_VIV1': 'TextEdit', 'VIV_OCUPA_': 'TextEdit', 'TOTAL_VIVI': 'TextEdit', 'CANTIDAD_H': 'TextEdit', 'VIV_TIPO_C': 'TextEdit', 'VIV_TIPO_D': 'TextEdit', 'VIV_TIPO_T': 'TextEdit', 'VIV_TIPO_P': 'TextEdit', 'VIV_TIPO_M': 'TextEdit', 'VIV_TIPO_1': 'TextEdit', 'VIV_TIPO_O': 'TextEdit', 'VIV_PARED_': 'TextEdit', 'VIV_PARED1': 'TextEdit', 'VIV_PARE_1': 'TextEdit', 'VIV_PARE_2': 'TextEdit', 'VIV_PARE_3': 'TextEdit', 'VIV_PARE_4': 'TextEdit', 'VIV_TECHO_': 'TextEdit', 'VIV_TECHO1': 'TextEdit', 'VIV_TECH_1': 'TextEdit', 'VIV_TECH_2': 'TextEdit', 'VIV_TECH_3': 'TextEdit', 'VIV_TECH_4': 'TextEdit', 'VIV_TECH_5': 'TextEdit', 'VIV_PISO_P': 'TextEdit', 'VIV_PISO_R': 'TextEdit', 'VIV_PISO_B': 'TextEdit', 'VIV_PISO_C': 'TextEdit', 'VIV_PISO_T': 'TextEdit', 'VIV_MATERI': 'TextEdit', 'VIV_MATE_1': 'TextEdit', 'VIV_MATE_2': 'TextEdit', 'VIV_AGUA_R': 'TextEdit', 'VIV_AGUA_P': 'TextEdit', 'VIV_AGUA_C': 'TextEdit', 'VIV_AGUA_1': 'TextEdit', 'Pob_Estima': 'TextEdit', 'area_total': 'TextEdit', 'Pob_cubier': 'TextEdit', });
lyr_hlpn_paraderos_3.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_hlpn_comuna_1.set('fieldLabels', {'objectid': 'hidden field', 'shape_leng': 'hidden field', 'dis_elec': 'hidden field', 'cir_sena': 'hidden field', 'cod_comuna': 'hidden field', 'codregion': 'hidden field', 'st_area_sh': 'hidden field', 'st_length_': 'hidden field', 'Region': 'hidden field', 'Comuna': 'hidden field', 'Provincia': 'hidden field', });
lyr_interseccion_buffer_2.set('fieldLabels', {'osm_id': 'hidden field', 'code': 'hidden field', 'fclass': 'hidden field', 'name': 'inline label - always visible', 'CUT': 'hidden field', 'REGION': 'hidden field', 'PROVINCIA': 'hidden field', 'COMUNA': 'hidden field', 'NOMBRE_DIS': 'hidden field', 'CODIGO_DIS': 'hidden field', 'MANZENT': 'hidden field', 'ZONA_CENSA': 'hidden field', 'MANZANA': 'hidden field', 'TOTAL_PERS': 'hidden field', 'TOTAL_HOMB': 'hidden field', 'TOTAL_MUJE': 'hidden field', 'PERSONAS_0': 'hidden field', 'PERSONAS_6': 'hidden field', 'PERSONAS_1': 'hidden field', 'PERSONAS_M': 'hidden field', 'PERSONAS_E': 'hidden field', 'PUEBLOS_IN': 'hidden field', 'TOTAL_VIV_': 'hidden field', 'TOTAL_VIV1': 'hidden field', 'VIV_OCUPA_': 'hidden field', 'TOTAL_VIVI': 'hidden field', 'CANTIDAD_H': 'hidden field', 'VIV_TIPO_C': 'hidden field', 'VIV_TIPO_D': 'hidden field', 'VIV_TIPO_T': 'hidden field', 'VIV_TIPO_P': 'hidden field', 'VIV_TIPO_M': 'hidden field', 'VIV_TIPO_1': 'hidden field', 'VIV_TIPO_O': 'hidden field', 'VIV_PARED_': 'hidden field', 'VIV_PARED1': 'hidden field', 'VIV_PARE_1': 'hidden field', 'VIV_PARE_2': 'hidden field', 'VIV_PARE_3': 'hidden field', 'VIV_PARE_4': 'hidden field', 'VIV_TECHO_': 'hidden field', 'VIV_TECHO1': 'hidden field', 'VIV_TECH_1': 'hidden field', 'VIV_TECH_2': 'hidden field', 'VIV_TECH_3': 'hidden field', 'VIV_TECH_4': 'hidden field', 'VIV_TECH_5': 'hidden field', 'VIV_PISO_P': 'hidden field', 'VIV_PISO_R': 'hidden field', 'VIV_PISO_B': 'hidden field', 'VIV_PISO_C': 'hidden field', 'VIV_PISO_T': 'hidden field', 'VIV_MATERI': 'hidden field', 'VIV_MATE_1': 'hidden field', 'VIV_MATE_2': 'hidden field', 'VIV_AGUA_R': 'hidden field', 'VIV_AGUA_P': 'hidden field', 'VIV_AGUA_C': 'hidden field', 'VIV_AGUA_1': 'hidden field', 'Pob_Estima': 'inline label - always visible', 'area_total': 'inline label - always visible', 'Pob_cubier': 'inline label - always visible', });
lyr_hlpn_paraderos_3.set('fieldLabels', {'osm_id': 'hidden field', 'code': 'hidden field', 'fclass': 'hidden field', 'name': 'hidden field', });
lyr_hlpn_paraderos_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
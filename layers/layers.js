var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Area_Fungsional_1 = new ol.format.GeoJSON();
var features_Area_Fungsional_1 = format_Area_Fungsional_1.readFeatures(json_Area_Fungsional_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Area_Fungsional_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area_Fungsional_1.addFeatures(features_Area_Fungsional_1);
var lyr_Area_Fungsional_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Area_Fungsional_1, 
                style: style_Area_Fungsional_1,
                popuplayertitle: 'Area_Fungsional',
                interactive: true,
                title: '<img src="styles/legend/Area_Fungsional_1.png" /> Area_Fungsional'
            });
var format_KETERANGAN_KERUSAKAN_SALURAN_2 = new ol.format.GeoJSON();
var features_KETERANGAN_KERUSAKAN_SALURAN_2 = format_KETERANGAN_KERUSAKAN_SALURAN_2.readFeatures(json_KETERANGAN_KERUSAKAN_SALURAN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KETERANGAN_KERUSAKAN_SALURAN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KETERANGAN_KERUSAKAN_SALURAN_2.addFeatures(features_KETERANGAN_KERUSAKAN_SALURAN_2);
var lyr_KETERANGAN_KERUSAKAN_SALURAN_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KETERANGAN_KERUSAKAN_SALURAN_2, 
                style: style_KETERANGAN_KERUSAKAN_SALURAN_2,
                popuplayertitle: 'KETERANGAN_KERUSAKAN_SALURAN',
                interactive: true,
    title: 'KETERANGAN_KERUSAKAN_SALURAN<br />\
    <img src="styles/legend/KETERANGAN_KERUSAKAN_SALURAN_2_0.png" /> Baik<br />\
    <img src="styles/legend/KETERANGAN_KERUSAKAN_SALURAN_2_1.png" /> Rusak Ringan<br />\
    <img src="styles/legend/KETERANGAN_KERUSAKAN_SALURAN_2_2.png" /> Rusak Sedang<br />\
    <img src="styles/legend/KETERANGAN_KERUSAKAN_SALURAN_2_3.png" /> Rusak Berat<br />' });
var format_JENIS_SALURAN_3 = new ol.format.GeoJSON();
var features_JENIS_SALURAN_3 = format_JENIS_SALURAN_3.readFeatures(json_JENIS_SALURAN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JENIS_SALURAN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JENIS_SALURAN_3.addFeatures(features_JENIS_SALURAN_3);
var lyr_JENIS_SALURAN_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JENIS_SALURAN_3, 
                style: style_JENIS_SALURAN_3,
                popuplayertitle: 'JENIS_SALURAN',
                interactive: true,
    title: 'JENIS_SALURAN<br />\
    <img src="styles/legend/JENIS_SALURAN_3_0.png" /> Saluran Primer<br />\
    <img src="styles/legend/JENIS_SALURAN_3_1.png" /> Saluran Sekunder<br />' });
var format_Tikungan_4 = new ol.format.GeoJSON();
var features_Tikungan_4 = format_Tikungan_4.readFeatures(json_Tikungan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tikungan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tikungan_4.addFeatures(features_Tikungan_4);
var lyr_Tikungan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tikungan_4, 
                style: style_Tikungan_4,
                popuplayertitle: 'Tikungan',
                interactive: true,
                title: '<img src="styles/legend/Tikungan_4.png" /> Tikungan'
            });
var format_Beda_Pasangan_5 = new ol.format.GeoJSON();
var features_Beda_Pasangan_5 = format_Beda_Pasangan_5.readFeatures(json_Beda_Pasangan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Beda_Pasangan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Beda_Pasangan_5.addFeatures(features_Beda_Pasangan_5);
var lyr_Beda_Pasangan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Beda_Pasangan_5, 
                style: style_Beda_Pasangan_5,
                popuplayertitle: 'Beda_Pasangan',
                interactive: true,
                title: '<img src="styles/legend/Beda_Pasangan_5.png" /> Beda_Pasangan'
            });
var format_Gorong__Gorong_6 = new ol.format.GeoJSON();
var features_Gorong__Gorong_6 = format_Gorong__Gorong_6.readFeatures(json_Gorong__Gorong_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gorong__Gorong_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gorong__Gorong_6.addFeatures(features_Gorong__Gorong_6);
var lyr_Gorong__Gorong_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gorong__Gorong_6, 
                style: style_Gorong__Gorong_6,
                popuplayertitle: 'Gorong_-_Gorong',
                interactive: true,
                title: '<img src="styles/legend/Gorong__Gorong_6.png" /> Gorong_-_Gorong'
            });
var format_Titik_Per50_m_7 = new ol.format.GeoJSON();
var features_Titik_Per50_m_7 = format_Titik_Per50_m_7.readFeatures(json_Titik_Per50_m_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Titik_Per50_m_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Titik_Per50_m_7.addFeatures(features_Titik_Per50_m_7);
var lyr_Titik_Per50_m_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Titik_Per50_m_7, 
                style: style_Titik_Per50_m_7,
                popuplayertitle: 'Titik_Per-50_m',
                interactive: true,
                title: '<img src="styles/legend/Titik_Per50_m_7.png" /> Titik_Per-50_m'
            });
var format_Box_Gate_Valve_8 = new ol.format.GeoJSON();
var features_Box_Gate_Valve_8 = format_Box_Gate_Valve_8.readFeatures(json_Box_Gate_Valve_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Box_Gate_Valve_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Box_Gate_Valve_8.addFeatures(features_Box_Gate_Valve_8);
var lyr_Box_Gate_Valve_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Box_Gate_Valve_8, 
                style: style_Box_Gate_Valve_8,
                popuplayertitle: 'Box_Gate_Valve',
                interactive: true,
                title: '<img src="styles/legend/Box_Gate_Valve_8.png" /> Box_Gate_Valve'
            });
var format_Box_Alva_Valve_9 = new ol.format.GeoJSON();
var features_Box_Alva_Valve_9 = format_Box_Alva_Valve_9.readFeatures(json_Box_Alva_Valve_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Box_Alva_Valve_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Box_Alva_Valve_9.addFeatures(features_Box_Alva_Valve_9);
var lyr_Box_Alva_Valve_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Box_Alva_Valve_9, 
                style: style_Box_Alva_Valve_9,
                popuplayertitle: 'Box_Alva_Valve',
                interactive: true,
                title: '<img src="styles/legend/Box_Alva_Valve_9.png" /> Box_Alva_Valve'
            });
var format_Bangunan_Bagi_10 = new ol.format.GeoJSON();
var features_Bangunan_Bagi_10 = format_Bangunan_Bagi_10.readFeatures(json_Bangunan_Bagi_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_Bagi_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_Bagi_10.addFeatures(features_Bangunan_Bagi_10);
var lyr_Bangunan_Bagi_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_Bagi_10, 
                style: style_Bangunan_Bagi_10,
                popuplayertitle: 'Bangunan_Bagi',
                interactive: true,
                title: '<img src="styles/legend/Bangunan_Bagi_10.png" /> Bangunan_Bagi'
            });
var format_Bangunan_Sadap_11 = new ol.format.GeoJSON();
var features_Bangunan_Sadap_11 = format_Bangunan_Sadap_11.readFeatures(json_Bangunan_Sadap_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_Sadap_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_Sadap_11.addFeatures(features_Bangunan_Sadap_11);
var lyr_Bangunan_Sadap_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_Sadap_11, 
                style: style_Bangunan_Sadap_11,
                popuplayertitle: 'Bangunan_Sadap',
                interactive: true,
                title: '<img src="styles/legend/Bangunan_Sadap_11.png" /> Bangunan_Sadap'
            });
var format_Rumah_Pompa_12 = new ol.format.GeoJSON();
var features_Rumah_Pompa_12 = format_Rumah_Pompa_12.readFeatures(json_Rumah_Pompa_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumah_Pompa_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_Pompa_12.addFeatures(features_Rumah_Pompa_12);
var lyr_Rumah_Pompa_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_Pompa_12, 
                style: style_Rumah_Pompa_12,
                popuplayertitle: 'Rumah_Pompa',
                interactive: true,
                title: '<img src="styles/legend/Rumah_Pompa_12.png" /> Rumah_Pompa'
            });
var group_TITIKAKSESSORIS = new ol.layer.Group({
                                layers: [lyr_Box_Gate_Valve_8,lyr_Box_Alva_Valve_9,lyr_Bangunan_Bagi_10,lyr_Bangunan_Sadap_11,lyr_Rumah_Pompa_12,],
                                fold: 'open',
                                title: 'TITIK AKSESSORIS'});
var group_TITIKKETERANGAN = new ol.layer.Group({
                                layers: [lyr_Tikungan_4,lyr_Beda_Pasangan_5,lyr_Gorong__Gorong_6,lyr_Titik_Per50_m_7,],
                                fold: 'open',
                                title: 'TITIK KETERANGAN'});

lyr_GoogleSatellite_0.setVisible(true);lyr_Area_Fungsional_1.setVisible(true);lyr_KETERANGAN_KERUSAKAN_SALURAN_2.setVisible(true);lyr_JENIS_SALURAN_3.setVisible(true);lyr_Tikungan_4.setVisible(true);lyr_Beda_Pasangan_5.setVisible(true);lyr_Gorong__Gorong_6.setVisible(true);lyr_Titik_Per50_m_7.setVisible(true);lyr_Box_Gate_Valve_8.setVisible(true);lyr_Box_Alva_Valve_9.setVisible(true);lyr_Bangunan_Bagi_10.setVisible(true);lyr_Bangunan_Sadap_11.setVisible(true);lyr_Rumah_Pompa_12.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Area_Fungsional_1,lyr_KETERANGAN_KERUSAKAN_SALURAN_2,lyr_JENIS_SALURAN_3,group_TITIKKETERANGAN,group_TITIKAKSESSORIS];
lyr_Area_Fungsional_1.set('fieldAliases', {'Id': 'Id', 'LUAS': 'LUAS', 'AREA': 'AREA', });
lyr_KETERANGAN_KERUSAKAN_SALURAN_2.set('fieldAliases', {'Id': 'Id', 'JENIS': 'JENIS', 'KATEGORI': 'KATEGORI', 'KETERANGAN': 'KETERANGAN', 'PANJANG': 'PANJANG', });
lyr_JENIS_SALURAN_3.set('fieldAliases', {'Id': 'Id', 'JENIS': 'JENIS', 'PANJANG': 'PANJANG', });
lyr_Tikungan_4.set('fieldAliases', {'NAME': 'NAME', 'pdfmaps_ph': 'pdfmaps_ph', 'Descriptio': 'Descriptio', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO1': 'FOTO1', 'FOTO2': 'FOTO2', 'FOTO3': 'FOTO3', 'FOTO4': 'FOTO4', });
lyr_Beda_Pasangan_5.set('fieldAliases', {'NAME': 'NAME', 'pdfmaps_ph': 'pdfmaps_ph', 'Descriptio': 'Descriptio', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO1': 'FOTO1', 'FOTO2': 'FOTO2', 'FOTO3': 'FOTO3', 'FOTO4': 'FOTO4', });
lyr_Gorong__Gorong_6.set('fieldAliases', {'NAME': 'NAME', 'pdfmaps_ph': 'pdfmaps_ph', 'Descriptio': 'Descriptio', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO1': 'FOTO1', 'FOTO2': 'FOTO2', 'FOTO3': 'FOTO3', 'FOTO4': 'FOTO4', });
lyr_Titik_Per50_m_7.set('fieldAliases', {'NAME': 'NAME', 'pdfmaps_ph': 'pdfmaps_ph', 'Descriptio': 'Descriptio', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO1': 'FOTO1', 'FOTO2': 'FOTO2', 'FOTO3': 'FOTO3', 'FOTO4': 'FOTO4', });
lyr_Box_Gate_Valve_8.set('fieldAliases', {'NAME': 'NAME', 'pdfmaps_ph': 'pdfmaps_ph', 'Descriptio': 'Descriptio', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO1': 'FOTO1', 'FOTO2': 'FOTO2', 'FOTO3': 'FOTO3', 'FOTO4': 'FOTO4', });
lyr_Box_Alva_Valve_9.set('fieldAliases', {'NAME': 'NAME', 'pdfmaps_ph': 'pdfmaps_ph', 'Descriptio': 'Descriptio', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO1': 'FOTO1', 'FOTO2': 'FOTO2', 'FOTO3': 'FOTO3', 'FOTO4': 'FOTO4', });
lyr_Bangunan_Bagi_10.set('fieldAliases', {'NAME': 'NAME', 'pdfmaps_ph': 'pdfmaps_ph', 'Descriptio': 'Descriptio', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO1': 'FOTO1', 'FOTO2': 'FOTO2', 'FOTO3': 'FOTO3', 'FOTO4': 'FOTO4', });
lyr_Bangunan_Sadap_11.set('fieldAliases', {'NAME': 'NAME', 'pdfmaps_ph': 'pdfmaps_ph', 'Descriptio': 'Descriptio', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO1': 'FOTO1', 'FOTO2': 'FOTO2', 'FOTO3': 'FOTO3', 'FOTO4': 'FOTO4', });
lyr_Rumah_Pompa_12.set('fieldAliases', {'NAME': 'NAME', 'pdfmaps_ph': 'pdfmaps_ph', 'Descriptio': 'Descriptio', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO1': 'FOTO1', 'FOTO2': 'FOTO2', 'FOTO3': 'FOTO3', 'FOTO4': 'FOTO4', });
lyr_Area_Fungsional_1.set('fieldImages', {'Id': 'TextEdit', 'LUAS': 'TextEdit', 'AREA': 'TextEdit', });
lyr_KETERANGAN_KERUSAKAN_SALURAN_2.set('fieldImages', {'Id': 'Range', 'JENIS': 'TextEdit', 'KATEGORI': 'TextEdit', 'KETERANGAN': 'TextEdit', 'PANJANG': 'TextEdit', });
lyr_JENIS_SALURAN_3.set('fieldImages', {'Id': 'Range', 'JENIS': 'TextEdit', 'PANJANG': 'TextEdit', });
lyr_Tikungan_4.set('fieldImages', {'NAME': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'Descriptio': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO1': 'ExternalResource', 'FOTO2': 'ExternalResource', 'FOTO3': 'ExternalResource', 'FOTO4': 'ExternalResource', });
lyr_Beda_Pasangan_5.set('fieldImages', {'NAME': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'Descriptio': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO1': 'ExternalResource', 'FOTO2': 'ExternalResource', 'FOTO3': 'ExternalResource', 'FOTO4': 'ExternalResource', });
lyr_Gorong__Gorong_6.set('fieldImages', {'NAME': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'Descriptio': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO1': 'ExternalResource', 'FOTO2': 'ExternalResource', 'FOTO3': 'ExternalResource', 'FOTO4': 'ExternalResource', });
lyr_Titik_Per50_m_7.set('fieldImages', {'NAME': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'Descriptio': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO1': 'ExternalResource', 'FOTO2': 'ExternalResource', 'FOTO3': 'ExternalResource', 'FOTO4': 'ExternalResource', });
lyr_Box_Gate_Valve_8.set('fieldImages', {'NAME': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'Descriptio': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO1': 'ExternalResource', 'FOTO2': 'ExternalResource', 'FOTO3': 'ExternalResource', 'FOTO4': 'ExternalResource', });
lyr_Box_Alva_Valve_9.set('fieldImages', {'NAME': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'Descriptio': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO1': 'ExternalResource', 'FOTO2': 'ExternalResource', 'FOTO3': 'ExternalResource', 'FOTO4': 'ExternalResource', });
lyr_Bangunan_Bagi_10.set('fieldImages', {'NAME': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'Descriptio': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO1': 'ExternalResource', 'FOTO2': 'ExternalResource', 'FOTO3': 'ExternalResource', 'FOTO4': 'ExternalResource', });
lyr_Bangunan_Sadap_11.set('fieldImages', {'NAME': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'Descriptio': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO1': 'ExternalResource', 'FOTO2': 'ExternalResource', 'FOTO3': 'ExternalResource', 'FOTO4': 'ExternalResource', });
lyr_Rumah_Pompa_12.set('fieldImages', {'NAME': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'Descriptio': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO1': 'ExternalResource', 'FOTO2': 'ExternalResource', 'FOTO3': 'ExternalResource', 'FOTO4': 'ExternalResource', });
lyr_Area_Fungsional_1.set('fieldLabels', {'Id': 'hidden field', 'LUAS': 'inline label - visible with data', 'AREA': 'inline label - visible with data', });
lyr_KETERANGAN_KERUSAKAN_SALURAN_2.set('fieldLabels', {'Id': 'hidden field', 'JENIS': 'hidden field', 'KATEGORI': 'inline label - visible with data', 'KETERANGAN': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', });
lyr_JENIS_SALURAN_3.set('fieldLabels', {'Id': 'hidden field', 'JENIS': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', });
lyr_Tikungan_4.set('fieldLabels', {'NAME': 'inline label - visible with data', 'pdfmaps_ph': 'hidden field', 'Descriptio': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO1': 'no label', 'FOTO2': 'no label', 'FOTO3': 'no label', 'FOTO4': 'no label', });
lyr_Beda_Pasangan_5.set('fieldLabels', {'NAME': 'inline label - visible with data', 'pdfmaps_ph': 'hidden field', 'Descriptio': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO1': 'no label', 'FOTO2': 'no label', 'FOTO3': 'no label', 'FOTO4': 'no label', });
lyr_Gorong__Gorong_6.set('fieldLabels', {'NAME': 'inline label - visible with data', 'pdfmaps_ph': 'hidden field', 'Descriptio': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO1': 'no label', 'FOTO2': 'no label', 'FOTO3': 'no label', 'FOTO4': 'no label', });
lyr_Titik_Per50_m_7.set('fieldLabels', {'NAME': 'inline label - visible with data', 'pdfmaps_ph': 'hidden field', 'Descriptio': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO1': 'no label', 'FOTO2': 'no label', 'FOTO3': 'no label', 'FOTO4': 'no label', });
lyr_Box_Gate_Valve_8.set('fieldLabels', {'NAME': 'inline label - visible with data', 'pdfmaps_ph': 'hidden field', 'Descriptio': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO1': 'no label', 'FOTO2': 'no label', 'FOTO3': 'no label', 'FOTO4': 'no label', });
lyr_Box_Alva_Valve_9.set('fieldLabels', {'NAME': 'inline label - visible with data', 'pdfmaps_ph': 'hidden field', 'Descriptio': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO1': 'no label', 'FOTO2': 'no label', 'FOTO3': 'no label', 'FOTO4': 'no label', });
lyr_Bangunan_Bagi_10.set('fieldLabels', {'NAME': 'inline label - visible with data', 'pdfmaps_ph': 'hidden field', 'Descriptio': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO1': 'no label', 'FOTO2': 'no label', 'FOTO3': 'no label', 'FOTO4': 'no label', });
lyr_Bangunan_Sadap_11.set('fieldLabels', {'NAME': 'inline label - visible with data', 'pdfmaps_ph': 'hidden field', 'Descriptio': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO1': 'no label', 'FOTO2': 'no label', 'FOTO3': 'no label', 'FOTO4': 'no label', });
lyr_Rumah_Pompa_12.set('fieldLabels', {'NAME': 'inline label - visible with data', 'pdfmaps_ph': 'hidden field', 'Descriptio': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO1': 'no label', 'FOTO2': 'no label', 'FOTO3': 'no label', 'FOTO4': 'no label', });
lyr_Rumah_Pompa_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
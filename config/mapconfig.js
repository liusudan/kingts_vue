import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
var streetmap=function(maptype){
    var maplayer=null;
    maptype=parseInt(maptype);
    switch(maptype){
        case 0:
            maplayer=new TileLayer({
                title:'map_base',
                source: new XYZ({
                    url:'https://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
                })
            })
        break;
        case 1:
            maplayer=new TileLayer({
                title:'map_base',
                source: new XYZ({
                    url:'http://t0.tianditu.gov.cn/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={z}&TileRow={y}&TileCol={x}&style=default&format=tiles&tk=9377fe1913f0b530bbe60632286c640e'
                })
            })
        break;
        case 2:
            maplayer=new TileLayer({
                title:'map_base',
                source: new XYZ({
                    url:'http://t0.tianditu.gov.cn/ter_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=ter&tileMatrixSet=w&TileMatrix={z}&TileRow={y}&TileCol={x}&style=default&format=tiles&tk=9377fe1913f0b530bbe60632286c640e'
                })
            })
        break;
    }
    return maplayer;
}
var mapconfig={
    x:114.064839,     //中心点经度和纬度
    y:22.548857,
    zoom: 7,
    minZoom: 6,
    maxZoom: 14,          //地图缩放级别
    streetmap:streetmap
};

export default mapconfig
import mapconfig from '../config/mapconfig'  //导入地图配置文件
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import {transform} from 'ol/proj';
var mapObj = new Map({
    // target: document.getElementById('map'),
    layers: [
      mapconfig.streetmap(0),
      new TileLayer({
        title:'bound_base',
        source: new XYZ({
            url:'http://t0.tianditu.gov.cn/ibo_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=ibo&tileMatrixSet=w&TileMatrix={z}&TileRow={y}&TileCol={x}&style=default&format=tiles&tk=9377fe1913f0b530bbe60632286c640e'
        }),
        zIndex: 10
      })
    ],
    view: new View({
      // projection: "EPSG:4326",    //使用这个坐标系
      center: transform([mapconfig.x,mapconfig.y],'EPSG:4326', 'EPSG:3857'),  //深圳
      zoom: mapconfig.zoom,
      minZoom: mapconfig.minZoom,
      maxZoom: mapconfig.maxZoom,
    })
});
export default mapObj
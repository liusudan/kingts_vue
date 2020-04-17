import mapObj from '../../src/mapbase.js'  //导入地图对象
// import {transform} from 'ol/proj';
// import TileLayer from 'ol/layer/Tile';
import Overlay from 'ol/Overlay';
var mapoption={
    mapLayers: [],//当前地图图层集合
    tileCount: 0,//已加载的切片数量
    loadedCount: 0,//加载完成的切片数量
    currentFeature: null,//当前选中的地图要素
    currentResolution: null,//当前Resolution
    clusterColor: null,//聚合圈颜色
    /**
     * 设置地图中心
     * @param {Array.<number>} center 中心点坐标，如[119,35]
     */
    setCenter: function (center) {
        mapObj.getView().setCenter(center);
    },
    /**
     * 设置地图缩放级别
     * @param {int} zoomlevel 缩放级别
     */
    setZoom: function (zoomlevel) {
        mapObj.getView().setZoom(zoomlevel);
    },
    /**
     * 地图缩小，每次缩小一级
     */
    zoomIn: function () {
        var view = mapObj.getView();
        var zoomlevel = view.getZoom();
        view.setZoom(zoomlevel - 1);
    },

    /**
     * 地图放大，每次放大一级
     */
    zoomOut: function () {
        var view =mapObj.getView();
        var zoomlevel = view.getZoom();
        view.setZoom(zoomlevel + 1);
    },
    /**
     * 根据图层名称获取图层，使用循环地图图层方式
     * @param {string} title 图层名称
     * @returns {layer} 返回图层
     */
    getLayerByTitle: function (title) {
        var tagLayer = null;
        var layers = mapObj.getLayers();
        layers.forEach(element => {
            if (element.values_.title == title) {
                tagLayer = element;
                return;
            }
        });
        return tagLayer;
    },
     /**
     * 根据名称移除图层
     * @param {string} title 图层名称
     */
    removeLayerByTitle: function (title) {
        var layer = this.getLayerByTitle(mapObj,title);
        if (null == layer) return;
        if (layer.type == "VECTOR") {
            layer.getSource().clear();
        }
        mapObj.removeLayer(layer);
    },
    /**
     * 根据点添加闪烁效果
     * @param {string} title 图层名称
     */
    /**
     * 根据名称移除overlay图层
     * @param {string} title 图层名称
     */
    removeOverlayByTitle: function (title) {
        var overlayer = mapObj.getOverlayById(title);
        if (overlayer) {
            mapObj.removeOverlay(overlayer);
        }   
    },
    /**
     * 根据名称移除overlay图层
     * @param {array} array 图层名称
     */
    removeOverlays: function (array) {
        for(let i=0;i<array.length;i++){
            var overlayer = mapObj.getOverlayById(array[i]);
            if (overlayer) {
                mapObj.removeOverlay(overlayer);
            }  
        } 
    },
    addFlashPoint_Ripple:function(title,point,color){
        // var div = document.getElementById("css_animation");
        var div = document.createElement("div");
        div.className="css_animation_"+color;
        var point_overlay = new Overlay({
            id:title,
            element: div,
            stopEvent:false,
            // positioning: 'center-center'
        });
        // point_overlay.setPosition(transform(point, 'EPSG:4326', 'EPSG:3857'));
        point_overlay.setPosition(point);
        mapObj.addOverlay(point_overlay);
        return point_overlay;
    },
    /**
     * 画圆overlay元素
     * @param {string} title 图层名称
     */
    drawCircle_Ripple:function(title,point,color){
        // var div = document.getElementById("css_animation");
        var div = document.createElement("div");
        div.className="css_circle_"+color;
        var point_overlay = new Overlay({
            id:title,
            element: div,
            stopEvent:false,
            // positioning: 'center-center'
        });
        // point_overlay.setPosition(transform(point, 'EPSG:4326', 'EPSG:3857'));
        point_overlay.setPosition(point);
        mapObj.addOverlay(point_overlay);
        return point_overlay;
    },
}
export default mapoption
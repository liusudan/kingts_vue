import mapObj from '../../src/mapbase.js'  //导入地图对象
var mapoption={
    mapLayers: [],//当前地图图层集合
    tileCount: 0,//已加载的切片数量
    loadedCount: 0,//加载完成的切片数量
    currentFeature: null,//当前选中的地图要素
    currentResolution: null,//当前Resolution
    clusterColor: null,//聚合圈颜色
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
}
export default mapoption
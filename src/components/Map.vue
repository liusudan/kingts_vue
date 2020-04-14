<template>
    <div id='map_container'>
        <div id="map" ref='mapView'></div> 
        <v-header></v-header>    
        <router-view/>
        <v-footer ref="footer" @mapchange="mapbaseChange($event)"></v-footer>
        <v-controller></v-controller>
    </div>
</template>
<script>
import 'ol/ol.css';
import mapbase from '../mapbase'
import mapconfig from '../../config/mapconfig'
import Header from './modal/Header';
import Footer from './modal/Footer';
import mapControl from './modal/mapControl'
import mapOptionService from '../../static/js/mapOptionService'
export default {
  name: 'Map',
  data () {
    return {
      map:null
    }
  },
  mounted(){
    // 初始化地图
    var mapView=this.$refs.mapView;
    mapbase.setTarget(mapView);
  },
  methods:{
    mapbaseChange:function(ev){
      // this.map.removeLayer(this.map.getLayers().item(0));
      mapOptionService.removeLayerByTitle('map_base');
      mapbase.addLayer(mapconfig.streetmap(ev));
    },
  },
  components:{
      'v-header':Header,
      'v-footer':Footer,
      'v-controller':mapControl
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map_container{height:100%;}
#map{height:100%;}
/*隐藏ol的一些自带元素*/
.ol-attribution,.ol-zoom,.ol-control { display: none;}

</style>

<template>
  <header class="header">
        <svg-icon icon-class="earth" style="width:20px;height:20px;"></svg-icon>
        <span class="search__brand" style="margin-left:4px;">地图服务</span>
        <span style="position: relative;bottom:3%;color: orange">&ensp;|&ensp;</span>
        <form action="" class="search">
            <input AUTOCOMPLETE="off" id="loc_keyword" type="text" v-model="cityname"
                class="search__input" placeholder="搜索城市" v-on:keyup.enter="mapfocus">
            <button type="button" class="search__button" id="mapfocus" @click="mapfocus">
                <svg-icon icon-class="search" style="width:22px;height:22px;"></svg-icon>
            </button>
        </form>
    </header>
</template>

<script>
import mapOptionService from '../../../static/js/mapOptionService';
import {transform} from 'ol/proj';
export default {
  name: 'Search',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      cityname:''
    }
  },
  methods:{
    mapfocus:function(){
        this.$axios.get('http://api.tianditu.gov.cn/geocoder', {
            params: {
                 ds: { "keyWord": this.cityname },
                 tk: '9377fe1913f0b530bbe60632286c640e'
            }
        }).then(rsp => {
            // mapOptionService.removeOverlayByTitle('iconfocus0');
            // mapOptionService.removeOverlayByTitle('iconfocus1');
            // mapOptionService.removeOverlayByTitle('iconfocus2');
            mapOptionService.removeOverlays(['iconfocus0','iconfocus1','iconfocus2'])
            var data=rsp.data;
            var centerPoint = [];
            if (data.status == 0) {
                centerPoint[0] = parseFloat(data.location.lon);
                centerPoint[1] = parseFloat(data.location.lat);
                var point = transform(centerPoint, 'EPSG:4326', 'EPSG:3857');
                mapOptionService.setCenter(point);
                mapOptionService.setZoom(8);
                mapOptionService.drawCircle_Ripple('iconfocus0',point,'red');
                mapOptionService.addFlashPoint_Ripple('iconfocus1',point,'red');
                setTimeout(function(){
                    mapOptionService.addFlashPoint_Ripple('iconfocus2',point,'red');
                },700)
            }
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*头部----------------------*/
.header {
  position: absolute;
  z-index: 100;
  left: 3%;
  top: 12%;

  height: 2.2rem;
  padding: 0 1rem 0 .5rem;
  background-color: rgba(0, 0, 0, .5);
  border-radius: 10rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;
}
/*搜索框----------------------*/
.search {
  transition: width .5s;

  display: flex;
  align-items: center;
  justify-content: flex-start;

}
.search__brand{
  color: #fff;
  font-weight: 300;
}
.search__input {
  border: none;
  outline: none;
  background-color: transparent;
  color: #eee;
  transition: width .2s;

  width: 13rem;
  padding: .5rem  2rem .5rem 0;
  margin-right: -2rem;

  flex: 1;
}
/* .search__input:focus {
  width: 18rem;
} */
/* #2 */
.search__button{
  border: none;
  background-color: transparent;
  position: relative;
  z-index: 110;
  outline: none;
}
.search__button:hover  .search__icon:last-child{
  cursor: pointer;
  fill: orange;
}
.search__icon:first-child{
  height: 1.3rem;
  width: 1.3rem;
  fill: orange;
}
.search__icon:last-child{
  height: 1.5rem;
  width: 1.5rem;
  fill: darkgray;
  transition: all .1s;
}
</style>
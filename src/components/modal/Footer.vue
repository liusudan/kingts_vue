<template>
    <div id="footer_bg" style="display:flex;align-items:flex-end;justify-content: space-between;">
        <div style="width:33%;"></div>
        <div style="width:33%;height:100%;display:flex;align-items: center;padding-bottom: 5px;">
            <div style="width:100%;height:50%;border-left: 1px solid #444;display:flex;align-items: flex-end;justify-content:center;">
                <input class="footer_btn active" type="button" id="map0" value="极简" v-on:click="mapChange('0')">
                <input class="footer_btn" type="button" id="map1" value="影像" v-on:click="mapChange('1')">
                <input class="footer_btn" type="button" id="map2" value="地形" v-on:click="mapChange('2')">
            </div>
        </div>
        <div style="width:32%;font-size: 10px;color:#aaa;display: flex;justify-content: space-between;align-items: flex-end;">
            <div id='scalebar' style="display: flex;align-items: flex-end;">比例尺：</div>
            <p>北京坤舆天信科技有限公司</p>
            <p style="margin-right:0.5rem;">京ICP备05079180号</p>
        </div>
    </div>
</template>

<script>
import mapbase from '../../mapbase';
import {ScaleLine} from 'ol/control';
export default {
  name: 'Footer',
  data () {
    return {
      msg: 'this is Footer',
      type:0
    }
  },
  mounted(){
    var scaleLineControl=new ScaleLine({
        //设置度量单位为米
        units: 'metric',
        target: 'scalebar',
        className: 'ol-scale-line'
    })
    mapbase.addControl(scaleLineControl);
  },
  methods:{
     mapChange:function(msg){
         $('.footer_btn').removeClass('active');
         $('#map'+msg).addClass('active');
         this.$emit('mapchange',msg);
     } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footer_bg{
  position: absolute;
  bottom: 0;
  left: 0;
  background: url(../../assets/ui/footer.png) no-repeat 0 0;
  background-size: 100% 100%;
  width: 100%;
  height: 7.5%;
}
.footer_btn{
  padding:0.2rem 0.5rem;
  border-radius: 15px;
  color:#fff;
  border:none;
  background: transparent;
  /* background: #fc8d00; */
  font-size: 12px;
  outline: none;
}

.footer_btn.active{
  background: #fc8d00;
  border:none;
  outline: none;
}

</style>
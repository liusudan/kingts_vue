<template>
  <div class="icon__group">
    <button type="button" class="icon__group_button" @click="zoomOut" title="放大">
        <svg-icon icon-class="add" class="icon"></svg-icon>
    </button>
    <button type="button" class="icon__group_button" @click="zoomIn" title="缩小">
        <svg-icon icon-class="minus" class="icon"></svg-icon>
    </button>
  </div>
</template>

<script>
import mapOptionService from '../../../static/js/mapOptionService'
export default {
    // 右侧地图控制图标组
  name: 'mapCroller',
  data () {
    return {
      
    }
  },
  methods:{
      zoomIn:function(){
           mapOptionService.zoomIn();
      },
      zoomOut:function(){
           mapOptionService.zoomOut();
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*右边图标组----------------------*/
.icon__group {
  position: absolute;
  z-index: 10;
  right: 1%;
  top:12%;

  display: flex;
  flex-direction: column;
  justify-content: center;
}
.icongroup{
  position: absolute;
  z-index: 10;
  right: 29%;
  top:12%;
}
.icon__group_button {
  border-radius: 50%;
  background-color: rgba(0,0,0,.4);
  border: none;
  outline: none;
  transition: background-color .2s;

  display: flex;
  align-items: center;

  padding: .4rem;
  margin-bottom: .6rem;
}
.icon__group_button:hover {
  cursor: pointer;
  box-shadow: 0px 0px 6px #eee;
}
.icon__group_button:active{
  animation: toggle .2s ease;
}
@keyframes toggle {
  0% {
      transform: scale(1);
  }
  50% {
      transform: scale(1.1);
  }
  100% {
      transform: scale(1);
  }
}

</style>
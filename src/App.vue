<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{padding:0; margin:0;}
html,body{
  height: 100%;
}
#app {
  height: 100%;
}
.ol-zoom{display: none;}
/* 比例尺样式 */
#scalebar .ol-scale-line {
  /* bottom: 0;
  right: 23%;
  left: auto; */
  width: 4rem;
  height: 100%;
  background-color: transparent;
  /* z-index: 2010; */
  position: unset;
}
#scalebar .ol-scale-line-inner{
  max-width: 4.6rem;
  min-width: 4.6rem;
  /* margin-top: .2rem; */
  /* height: 14px; */
  font-size: 8px;
  color: #aaa;
  /* border: 2px solid gray; */
  border-right:none;
  border-bottom-color:#aaa;
  border-left:none;

    /* border:none; */
}
</style>

<template>
  <div class="menu">
      <ul>
        <v-menuli v-for="(item,index) in warnmenu" :key="index" :isActive='item.isActive' :text='item.text' :iconname="item.iconname" :link="item.link" @click.native="setActive(index)">
        </v-menuli>
      </ul>
  </div>
</template>

<script>
import Menuli from './modal/Menu_li'
export default {
  name: 'WarnManage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      warnmenu:[
        {
          isActive: false,
          text:'卫星',
          iconname:'lalien',
          link:'/'
        },
        {
          isActive: false,
          text:'雷达',
          iconname:'lradar',
          link:'/'
        }
      ]  
    }
  },
  components:{
      'v-menuli':Menuli,
  },
  methods:{
    setActive:function(index){
      this.warnmenu.forEach((el)=>{
        el.isActive=false;
      })
      this.warnmenu[index].isActive=true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu{
  position: absolute;
  z-index: 20;
  top:22%;
  left:2%;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
}
</style>
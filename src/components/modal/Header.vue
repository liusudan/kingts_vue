<template>
  <div id="nav_header" style="top:0;">
        <div style="width:34%;height: 71%;display: flex;justify-content: center;">
            <router-link to='/warnManage' class="nav_menu" id="a_warner"  v-bind:class="{'active':navwarner}" v-on:click.native="toggleNavmenu('nav1')">
                <svg-icon icon-class="airwarn"></svg-icon>
                <span>风险管理</span>
            </router-link> 
            <router-link to='/liveWatch' class="nav_menu" id="a_watcher"  v-bind:class="{'active':navwatcher}" v-on:click.native="toggleNavmenu('nav2')">
                <svg-icon icon-class="watching"></svg-icon>
                <span>实况监测</span>           
            </router-link>
            <router-link to='/rightFocast' class="nav_menu" id="a_focaster"  v-bind:class="{'active':navfocaster}" v-on:click.native="toggleNavmenu('nav3')">
                <svg-icon icon-class="finefocast"></svg-icon>
                <span>精细预报</span>
            </router-link>
        </div>
        <h1 style="width:34%;color:#fff2e2;height: 100%;display: flex;justify-content: center;align-items: center;font-size: 18px;text-shadow: 0px 2px 10px #ff9710;">
            <img style="width:32px;margin-right: 10px;" src="../../assets/ui/logonav.png" alt="">
            坤舆智能电力自然风险管理平台
        </h1>
        <div class="nav_right" style="width:32%;height: 71%;display: flex;justify-content: center;padding-left: 3%;">
            <a href="javascript:;" id="sign_warn" class="nav_menu_r" style="display:flex;width: 50%;align-items: center;justify-content: center;" v-on:click="showAdvicetab">
                <svg-icon icon-class="message2"></svg-icon>
                <span style="font-size: 12px;padding-left: 3px;">消息通知</span>  
            </a>
            <a href="javascript:;" id="sign_sys" class="nav_menu_r" style="display:flex;width: 50%;align-items: center;justify-content: center;" v-on:click="showAbouttab">
                <svg-icon icon-class="analyse"></svg-icon>
                <span style="font-size: 12px;padding-left: 3px;">统计分析</span>  
            
            </a>
            <a href="javascript:;" id="sign_set" class="nav_menu_r" style="display:flex;width: 50%;align-items: center;justify-content: center;" v-on:click="Setting">
                <svg-icon icon-class="settings"></svg-icon>
                <span style="font-size: 12px;padding-left: 6px;">设置</span>  
            </a>
            <router-link to='/login' style="display:flex;width: 50%;align-items: center;justify-content: center;">
                <div style="padding-bottom:5px;padding-left: 6px;">
                    <span style="font-size: 12px;color:#fc8d00;text-decoration: underline" id="login_user">欢迎登录</span>  
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'this is header',
      navwarner: false,
      navwatcher: false,
      navfocaster: false
    }
  },
  methods:{
    toggleNavmenu:function(msg){
      if(msg=='nav1'){
        this.navwarner = true;
        this.navwatcher = false,
        this.navfocaster = false
      }else if(msg=='nav2'){
        this.navwarner = false;
        this.navwatcher = true,
        this.navfocaster = false
      }else if(msg=='nav3'){
        this.navwarner = false;
        this.navwatcher = false,
        this.navfocaster = true
      }
    },
    showAdvicetab:function(){
      $('.nav_menu_r').removeClass('active');
      $('#sign_warn').addClass('active');
    },
    showAbouttab:function(event){
      $('.nav_menu_r').removeClass('active');
      $('#sign_sys').addClass('active');
    },
    Setting:function(event){
      $('.nav_menu_r').removeClass('active');
      $('#sign_set').addClass('active');
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nav_header{
  width: 100%;
  height: 8%;
  background: url(../../assets/ui/navbg.png) no-repeat 0 0;
  background-size: 100% 100%;
  position: absolute; 
  display: flex;
  justify-content: space-between;
  z-index: 1000;
  align-items: flex-end;
}
a.nav_menu{
  display: flex;
  align-items: center;
  width: 24%;
  color:#fff;
  justify-content: center;
  font-size:12px;
}
a.nav_menu>span{
  padding-left: 6px;
}
.svg_icon{
  width: 0.9rem;
  height: 0.9rem;
}
a.nav_menu:hover{
  text-decoration: none;
}
a.nav_menu.active{
  /* background: linear-gradient(rgb(230, 133, 7,1),rgba(206, 117, 0, 0.3)); */
  background: url(../../assets/ui/uibg_left_active.png) no-repeat 0 0;
  background-size: 100% 100%;
}
.nav_right>a{
  color: #fff;
}
.nav_right>a:hover{
  text-decoration: none;
}
.nav_menu_r{
  font-size:11px;
}
a.nav_menu_r.active{
  background: url(../../assets/ui/uibg_right_active.png) no-repeat 0 0;
  background-size: 100% 100%;
}
a{
  text-decoration: none;
}
</style>

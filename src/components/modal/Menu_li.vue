<template>
    <li class="t_menu">
        <router-link :to='link' class="l_menu" :class="{'active':isActive}">
            <span class="menu_svg">
                <svg-icon :icon-class="iconname" class="l_svg"></svg-icon>
            </span> 
            <span class="menu_span">{{text}}</span> 
        </router-link> 
    </li>
</template>

<script>
export default {
  //左侧菜单单个组件 
  name: 'menu_li',
  props: ['isActive','text','iconname','link'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.t_menu{
  margin-top:10px;
  list-style: none;
}
.l_menu{
  height: 26px;
  background: rgba(0, 0, 0, .5);
  /* margin-top: 8px; */
  padding:0px 8px;
  border-radius: 14px;
  /* padding-left:6px; */
  /* line-height: 23px; */
  align-items: center;
  color:#fff;
  font-size: 12px;
  display: inline-flex;
  align-items: center;
}
.l_menu .menu_span{
  padding-left:5px;
  letter-spacing: 1px;
  color:#fff;
  text-decoration: none;
}
a{
  color: #ffffff;
  text-decoration: none;
}
a:hover{
  color:#ccc;
}
.menu_svg{
  display: inline-block;
  padding:4px;
  /* background:#fc8d00; */
  border-radius:50%; 
}
.l_menu.active .menu_svg{
  background: #fc8d00;
}
</style>
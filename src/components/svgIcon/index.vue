<template>
  <svg :class="svgClass" aria-hidden="true" v-on="$listeners">
    <use :xlink:href="iconName"/>
  </svg>
</template>
 
<script>
  export default {
    name: 'SvgIcon',
    props: {
      iconClass: {
        type: String,
        required: true
      },
      className: {//按需加入，传过来可以给他定义属于自己的class名字
        type: String,
        default: ''
      }
    },
    computed: {
      iconName() {
        return `#icon-${this.iconClass}`
      },
      svgClass() {
        if (this.className) {
          return 'svg-icon ' + this.className
        } else {
          return 'svg-icon'
        }
      }
    },
    mounted(){},
    methods:{},
  }
</script>
 
<style scoped>
.svg-icon {
  /* width: 1em;//svg的大小，根据需要改变
  height: 1em; */
  width: 14px;
  height: 14px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: auto;
}
.l_svg{
  width:22px;
  height: 20px;
  /* background: #fc8d00; */
}
.icon {
  width: 1.1rem;
  height: 1.1rem;
}
</style>

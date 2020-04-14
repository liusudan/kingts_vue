<template>
  <div class="hello">
      <h1>this is LiveWatch.vue</h1>
  </div>
</template>

<script>
export default {
  name: 'LiveWatch',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .hello{
        position:absolute;
        top:12%;
        left:3%;
        z-index:1000;
    }
</style>
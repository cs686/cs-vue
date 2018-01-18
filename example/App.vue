<template>
  <div id="app">
      <home></home>
      <cs-alert></cs-alert>
  </div>
</template>
<script>
import Home from './views/Home.vue'
export default {
  created(){
      console.log(111111)
  },
  components:{
      Home
  }
}
</script>


<template lang='pug'>
.flex.flex-wrap
  Card.w-025(v-for='i,idx in allProducts' :key='idx' :product='i')
</template>

<script>
export default {
  computed:{
    allProducts(){
      return this.$store.state.allProducts
    }
  }
}
</script>

<style>
.w-025{
  width: 20%;
  box-sizing: border-box;
}
</style>
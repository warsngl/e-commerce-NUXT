<template lang='pug'>
.border-2.border-gray-400.m-4.bg-gray-300.p-2.rounded.shadow-lg
  p.text-sm.uppercase.text-blue-400 {{product.title}}
  p.text-xs {{product.description}}
  img.w-40.mx-auto(:src="`${product.img}`")
</template>

<script>
export default {
  props:{product:Object}

}
</script>

<style>

</style>
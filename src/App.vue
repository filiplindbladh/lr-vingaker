<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted () {
    this.$store.dispatch('getPages')
    this.$store.dispatch('getPosts')
  }
}
</script>

<style lang="scss">
    body {
      font-family: Oxygen;
    }
</style>

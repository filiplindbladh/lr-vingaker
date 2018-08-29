<template>
  <div id="app">
    <contactBubble/>
    <router-view/>
  </div>
</template>

<script>
import contactBubble from '@/components/contactBubble'
export default {
  name: 'app',
  components: {
    contactBubble
  },
  mounted() {
    this.$store.dispatch('getPages')
    this.$store.dispatch('getPosts')
  }
}
</script>

<style lang="scss">
body {
  font-family: 'Oxygen', sans-serif;
}
</style>

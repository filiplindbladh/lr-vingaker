<template>
<div id="menu">
  <a href="/">
    <img class="lr-logo" :src="this.logo" alt="logo">
  </a>
  <scrollactive ref="scrollactive" :offset="50">
    <a href="#header" class="scrollactive-item">Start</a>
    <a href="#sectionServices" class="scrollactive-item">Tjänster</a>
    <a href="#staff" class="scrollactive-item">Kontakt</a>
    <a href="#reviews" class="scrollactive-item">Om oss</a>
    <a href="#maps" class="scrollactive-item">Här finns vi</a>
  </scrollactive>
</div>
</template>

<script>
export default {
  name: 'lrMenu',
  data () {
    return {
      logo: require('../img/ving/logo.svg')
    }
  },
  methods: {
    onItemChanged (event, currentItem, lastActiveItem) {
      this.currentItem.classList.add('is-active')
      this.lastActiveItem.classList.remove('is-active')
    }
  },
  components: {
  }
}
</script>

<style lang="scss">
#menu {
  position: fixed;
  z-index: 250;
  padding: 20px 5%;
  width: 100vw;
  background-color: white;
  .lr-logo {
    height: 65px;
    position: absolute;
    left: 5%;
    top: 0px;
  }
}
nav {
  text-align: right;
  a {
    margin-left: 20px;
    color: $black;
    text-transform: uppercase;
    font-size: .85rem;
  }
}
.is-active {
  color: $blue;
  border-bottom: 2px solid $blue;
  font-weight: 700;
}
</style>

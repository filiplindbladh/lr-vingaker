<template>
  <div>
    <div class="services-header overlay" v-bind:style="{ 'background-image': 'url(' + this.servicesBannerContent.header.sizes.large + ')' }">
      <div class="quote container">
        <h3> {{ this.servicesBannerContent.title }}</h3>
      </div>
    </div>
    <div class="section servicesText">
      <p class="leadText" v-html="this.servicesBannerContent.intro"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lrServicesBanner',
  computed: {
    pages () {
      return this.$store.state.pages
    },
    servicesBannerContent () {
      if (this.pages.length > 0) {
        return {
          header: this.pages[4].acf.services_header,
          title: this.pages[4].acf.heading,
          intro: this.pages[4].acf.intro
        }
      } else {
        return {
          header: {
            sizes: {
              large: '...'
            }
          },
          title: '...',
          intro: '...'
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.quote {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  text-align: center;
  h3 {
    color: $white;
    z-index: 450;
    width: 80%;
    font-size: 35px;
  }
}
.services-header {
  margin-top: 67px;
  //background-image: url("../img/servicesHeader.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 250px;
  position: relative;
  z-index: -1;
}
.servicesText {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .leadText {
    font-weight: 800;
  }
}
@media screen and (max-width: $tablet - 1px) {
  .quote {
    h3 {
      font-size:5vw;
    }
  }
}
</style>

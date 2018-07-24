<template>
  <!-- swiper -->
  <swiper :options="swiperOption">
    <swiper-slide>
      <div class="section headerOne header overlay" v-bind:style="{ 'background-image': 'url(' + this.headerContent.imageOne.sizes.large + ')' }">
        <div class="lrHeader container">
          <h1> {{ this.headerContent.headingOne }} </h1>
          <hr class="lrHeaderLineHeader">
          <!-- <a href="/tjanster" id="lr-button-more" class="button is-info is-outlined">LÄS MER</a> -->
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="section headerThree header overlay" v-bind:style="{ 'background-image': 'url(' + this.headerContent.imageTwo.sizes.large + ')' }">
        <div class="lrHeader container">
          <h2> {{ this.headerContent.headingTwo }} </h2>
          <hr class="lrHeaderLineHeader">
          <!-- <a href="/online" id="lr-button-more" class="button is-info is-outlined">LÄS MER</a> -->
        </div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'lrHeader',
  data () {
    return {
      swiperOption: {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 8000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  computed: {
    pages () {
      return this.$store.state.pages
    },
    headerContent () {
      if (this.pages.length > 0) {
        return {
          headingOne: this.pages[5].acf.heading_one,
          headingTwo: this.pages[5].acf.heading_two,
          imageOne: this.pages[5].acf.image_one,
          imageTwo: this.pages[5].acf.image_two
        }
      } else {
        return {
          headingOne: '...',
          headingTwo: '...',
          imageOne: {
            sizes: {
              large: '...'
            }
          },
          imageTwo: {
            sizes: {
              large: '...'
            }
          }
        }
      }
    }
  },
  mounted () {
  }
}
</script>
<style lang="scss" scoped>
h1, h2 {
  text-transform: uppercase;
  width: 75%;
}
</style>
<style lang="scss">
.swiper-slide {
  max-height: 100vh;
}
.header {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: $blue;
  position: relative;
  padding: 80px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: 30px;
  flex-direction: column;
}
.lrHeader {
  align-items: center;
  display: flex;
  flex-direction: column;
  h1,
  h2,
  h3,
  h4 {
    text-align: center;
    color: $white;
    z-index: 100;
  }
}
.lrHeaderLineHeader {
  background-color: $white;
  height: 5px;
  width: 295px;
  z-index: 100;
  margin-bottom: 30px;
}
#lr-button-more {
  transition: all 0.3s ease-in-out;
  border: 5px solid $green;
  font-size: 23px;
}
@media #{$ipads} {
  .lrHeader h1, .lrHeader h2 {
    width: 80%;
  }
}
</style>

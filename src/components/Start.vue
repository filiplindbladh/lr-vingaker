<template>
  <div id="start">
    <!-- menu -->
    <lrMenu/>

    <!-- header -->
    <lrHeader/>

    <!-- contactBubble -->
    <contactBubble/>

    <!-- services -->
    <lrServices/>

    <!--Facebook post-->
    <!-- lrFacebookPost/> -->

    <!-- first contact banner -->
    <lrContactBanner v-bind:bannerText="this.bannerTexts.bannerOne" :backgroundImage="true"/>

    <!-- staff -->
    <lrStaff/>

    <!-- review carousell -->
    <!--lrReviews/>-->

    <!-- second contact banner -->
    <lrContactBanner v-bind:bannerText="this.bannerTexts.bannerTwo" :backgroundImage ="false"/>

    <!-- maps -->
    <lrMaps/>

    <!-- footer -->
    <lrFooter/>
  </div>
</template>

<script>
import 'font-awesome/css/font-awesome.css'
import contactBubble from '@/components/contactBubble.vue'
import lrMenu from '@/components/lrMenu.vue'
import lrHeader from '@/components/lrHeader.vue'
import lrContactBanner from '@/components/lrContactBanner.vue'
import lrServices from '@/components/lrServices.vue'
import lrStaff from '@/components/lrStaff.vue'
import lrReviews from '@/components/lrReviews.vue'
import lrMaps from '@/components/lrMaps.vue'
import lrFooter from '@/components/lrFooter.vue'
import VueImgLoader from 'vue-img-loader'
import lrFacebookPost from '@/components/lrFacebookPost.vue'

export default {
  name: 'Start',
  data () {
    return {
    }
  },
  computed: {
    pages () {
      return this.$store.state.pages
    },
    bannerTexts () {
      if (this.pages.length > 0) {
        return {
          bannerOne: this.pages[6].acf.contactbanner_heading_one,
          bannerTwo: this.pages[6].acf.contactbanner_heading_two
        }
      } else {
        return {
          bannerOne: '...',
          bannerTwo: '...'
        }
      }
    }
  },
  methods: {
  },
  components: {
    contactBubble,
    lrMenu,
    lrHeader,
    lrServices,
    lrContactBanner,
    lrStaff,
    lrReviews,
    lrMaps,
    lrFooter,
    lrFacebookPost,
    'vue-img-loader': VueImgLoader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    position: relative;
  }
  #contact-bubble {
    z-index: 900;
    position: fixed;
    right: 20px;
    bottom: 20px;
  }
  /* ****************** MEDIAQUERIES ****************** */
@media screen and (max-width: $tablet - 1px) {
  .lrHeaderLine {
    width: 50%;
  }
}
</style>

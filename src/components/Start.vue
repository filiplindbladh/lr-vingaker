<template>
  <div id="start">
  <!-- contactBubble -->
  <contactBubble/>
  <lrMenu />
  <!-- header -->
  <lrHeader/>

  <!-- services -->
  <lrServices></lrServices>

  <!-- first contact banner -->
  <lrContactBanner bannerText="Långsiktiga lösningar för traditionella eller digitala företag" :backgroundImage="true"></lrContactBanner>

  <!-- the staff on LR-orebro -->
  <lrStaff></lrStaff>

  <!-- review carousell -->
  <lrReviews></lrReviews>

 <!-- second contact banner -->
 <lrContactBanner bannerText="Behöver ni hjälp att utveckla ert företag?" :backgroundImage ="false"></lrContactBanner>

  <!-- How to get there -->
  <lrMaps></lrMaps>

  <!-- footer of the page -->
  <lrFooter></lrFooter>

  </div>
</template>

<script>
import 'font-awesome/css/font-awesome.css'
import contactBubble from '@/components/contactBubble.vue'
import lrHeader from '@/components/lrHeader.vue'
import lrContactBanner from '@/components/lrContactBanner.vue'
import lrServices from '@/components/lrServices.vue'
import lrStaff from '@/components/lrStaff.vue'
import lrReviews from '@/components/lrReviews.vue'
import lrMaps from '@/components/lrMaps.vue'
import lrFooter from '@/components/lrFooter.vue'
import VueImgLoader from 'vue-img-loader'
import lrMenu from '@/components/lrMenu.vue'

export default {
  name: 'Start',
  components: {
    contactBubble,
    lrHeader,
    lrMenu,
    lrServices,
    lrContactBanner,
    lrStaff,
    lrReviews,
    lrMaps,
    lrFooter,
    'vue-img-loader': VueImgLoader
  }
}
</script>

<style lang="scss">
    html {
      -webkit-box-sizing: border-box;
              box-sizing: border-box;
    }
    *, *:before, *:after {
            -webkit-box-sizing: inherit;
                    box-sizing: inherit;
    }
    body {
      position: relative;
    }
    #contact-bubble {
      z-index: 900;
      right: 20px;
      position: fixed;
      bottom: 50px;
    }
    /* ****************** MEDIAQUERIES ****************** */
  @media screen and (max-width: $tablet - 1px) {
    .lrHeaderLine {
      width: 50%;
    }
  }
</style>

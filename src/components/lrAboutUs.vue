<template>
  <div>
    <!-- Banner  -->
    <div class="aboutUsImage overlay" v-bind:style="{ 'background-image': 'url(' + this.aboutTexts.headerImg.sizes.large + ')' }">
      <div class="quote container">
        <h3> {{ this.aboutTexts.heading }}</h3>
      </div>
    </div>
    <!-- Content on about us page -->
    <div class="section container contactUs">
      <div class="head">
        <h3>Om oss</h3>
        <hr class="lrHeaderLine">
        <p class="mainText" v-html="this.aboutTexts.text">
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lrContactUs',
  computed: {
    pages () {
      return this.$store.state.pages
    },
    aboutTexts () {
      if (this.pages.length > 0) {
        return {
          headerImg: this.pages[3].acf.header_img,
          heading: this.pages[3].acf.heading,
          text: this.pages[3].acf.text
        }
      } else {
        return {
          headerImg: {
            sizes: {
              large: '...'
            }
          },
          heading: '...',
          text: '...'
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
    width: 70%;
    font-size: 35px;
  }
  span {
    font-size: 40px;
    font-weight: bold;
    z-index: 1000;
  }
  .fa {
    font-size: 40px;
    padding-right: 20px;
  }
}
.aboutUsImage {
  margin-top:67px;
  // background-image: url("../img/aboutHeader.png");
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  width: 100%;
  height: 250px;
  position: relative;
}
.contactUs .head {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;
}
.lrHeaderLine {
  background-color: $red;
}
.mainText {
  text-align: left;
  span {
    font-weight: bold;
    font-size: 20px;
    padding-bottom: 5px;
  }
}
/* ****************** MEDIAQUERIES ****************** */
@media screen and (max-width: $tablet - 1px) {
  .quote {
    h3 {
      font-size: 5vw;
    }
  }
  .head .lrHeaderLine {
    width:50%;
  }
}
</style>

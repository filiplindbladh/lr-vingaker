<template>
  <div>
    <!-- Header  -->
    <lr-menu></lr-menu>
    <!-- Banner  -->
    <div class="contactImage overlay" v-bind:style="{ 'background-image': 'url(' + this.onlineTexts.headerImg.sizes.large + ')' }">
      <div class="quote container">
        <h3 class="responsiveHeading"> {{ this.onlineTexts.heading }} </h3>
      </div>
    </div>
    <div class="section container lrOnlineText">
      <p class="mainText" v-html="this.onlineTexts.text">
      </p>
    </div>
    <!-- Content on page LR online -->
    <div class="section flex">
      <div class="card">
        <div class="card-content">
          <div class="cardImage">
            <img :src="this.onlineTexts.img.sizes.large" alt="lr-online">
          </div>
            <strong>{{ this.onlineTexts.imgText }}</strong>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <p class="title">Logga in på Lr-Online</p>
          <!-- target blank to get the inlogged page to show in a new tab -->
          <!-- form to log in to LR online -->
        <form action="https://monitor.foretagsplatsen.se/Login" method="post" target="_blank">
          <input type="hidden" id="theme" name="theme" value="KundId" />
          <input type="hidden" id="cultureInfo" name="cultureInfo" value="sv-SE" />
          <p>
            <label for="username">Användare:</label>
            <input class="input" type="text" id="username" name="username">
          </p>
          <p>
            <label for="password">Lösenord:</label>
            <input class="input" type="password" id="password" name="password">
          </p>
          <button class="button is-primary is-outlined" type="submit" value="Logga in">Logga in</button>
        </form>
        </div>
      </div>
    </div>
    <!-- Footer here -->
    <lrFooter></lrFooter>
  </div>
</template>

<script>
import lrMenu from '@/components/lrMenu.vue'
import lrFooter from '@/components/lrFooter.vue'
export default {
  name: 'lrOnline',
  components: {
    lrMenu,
    lrFooter
  },
  computed: {
    pages () {
      return this.$store.state.pages
    },
    onlineTexts () {
      if (this.pages.length > 0) {
        return {
          headerImg: this.pages[1].acf.header_img,
          heading: this.pages[1].acf.heading,
          text: this.pages[1].acf.text,
          img: this.pages[1].acf.img,
          imgText: this.pages[1].acf.img_text
        }
      } else {
        return {
          headerImg: {
            sizes: {
              large: '...'
            }
          },
          heading: '...',
          text: '...',
          img: {
            sizes: {
              large: '...'
            }
          },
          imgText: '...'
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
/* styling for quote inside header */
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
  span {
    font-size: 40px;
    font-weight: bold;
    z-index: 1000;
  }
  .quoteTextContact {
    z-index: 300;
    margin-top: 0;
    margin-bottom: 0;
    text-align: center;
    width: 90%;
  }
  .fa {
    font-size: 40px;
    padding-right: 20px;
  }
}
.lrHeaderLine {
  background-color: $red;
}
.contactImage {
  margin-top: 67px;
  // background-image: url("../img/lrContact.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 250px;
  position: relative;
}
.flex {
  height: 100%;
  padding-bottom: 20px;
  display:flex;
  align-items: stretch;
  align-items: stretch;
  flex-direction: row;
  justify-content: center;
}
.card {
  width: 50%;
}
.card-content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  .cardImage {
    height: auto;
    text-align: center;
  }
}
button, p  {
  margin-top: 30px;
}
.lrOnlineText {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 0;
  padding-bottom: 0;
}
/* ****************** MEDIAQUERIES ****************** */
@media screen and (max-width: $tablet - 1px) {
  .flex {
    flex-direction: column;
  }
  .card {
    width: 100%;
    height: auto;
  }
}
</style>

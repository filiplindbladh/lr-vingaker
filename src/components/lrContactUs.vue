<template>
  <div>
    <!-- Banner  -->
    <div class="contactImage overlay" v-bind:style="{ 'background-image': 'url(' + this.contactTexts.headerImg.sizes.large + ')' }">
      <div class="quote container">
        <h3 class="responsiveHeading"> {{ this.contactTexts.heading }} </h3>
      </div>
    </div>
    <!-- Content on contact us page -->
    <div class="section container contactUs">
      <div class="head">
        <h3>Kontakta oss</h3>
        <hr class="lrHeaderLine">
        <p class="mainText adress">
          <strong>Adress:</strong> {{ this.contactTexts.adress }} <br/>
          <strong>E-post:</strong> <a :href="'mailto:' + this.contactTexts.epost"> {{ this.contactTexts.epost }} </a> <br/>
          <strong>Växel:</strong> <a :href="'tel:' + this.contactTexts.vaxel"> {{ this.contactTexts.vaxel }} </a>
        </p>
      <input class="input" type="text" placeholder="Sök..." v-model="search">
      </div>
      <!--- search fallback -->
      <div v-if="this.staffList.length === 0" class="search-fallback">
        <p>
          Sökningen gav inget resultat...
        </p>
      </div>
      <!-- Pictures and info about the staff on -->
      <div class="columns is-mobile is-multiline lrContactPictures">
        <div class="column is-mobile is-half-tablet is-one-third-desktop" v-for="(member, index) in staffList" :key="index">
          <div class="staffContactContainer">
            <div class="imageTitle">
              <img class="lrStaffMember" :src="member.img.sizes.medium" alt="Staff member">
            </div>
              <div class="imageInfo">
                <div class="staffContactInfo">
                  <strong><h5> {{ member.name }}</h5></strong>
                  <br/><strong> {{ member.role }}</strong>
                  <a v-if="member.phone.length > 0" :href="'tel:' + member.phone">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    {{ member.phone }}
                  </a>
                  <a v-if="member.mobile.length > 0" :href="'tel:' + member.mobile">
                    <i class="fa fa-mobile" aria-hidden="true"></i>
                    {{ member.mobile }}
                  </a>
                  <a v-if="member.mail.length > 0" :href="'mailto:' + member.mail">
                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                    {{ member.mail }}
                  </a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lrContactUs',
  data() {
    return {
      search: ''
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts
    },
    staffList() {
      let staff = this.posts.map(posts => posts.acf)
      return staff.reverse().filter(member => {
        return (
          member.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1 ||
          member.role.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
        )
      })
    },
    pages() {
      return this.$store.state.pages
    },
    contactTexts() {
      if (this.pages.length > 0) {
        return {
          heading: this.pages[0].acf.contact_heading,
          headerImg: this.pages[0].acf.contact_header_img,
          adress: this.pages[0].acf.adress,
          epost: this.pages[0].acf.epost,
          vaxel: this.pages[0].acf.vaxel
        }
      } else {
        return {
          heading: '...',
          headerImg: {
            sizes: {
              large: '...'
            }
          },
          adress: '...',
          epost: '...',
          vaxel: '...'
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.input {
  width: 70%;
  margin-top: 40px;
  &:focus {
    border: none;
  }
}
.search-fallback {
  width: 70%;
  margin: 0 auto;
}
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
  // background-image: url("../img/contactHeader.png");
  background-repeat: no-repeat;
  background-position: center;
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
.fa {
  margin-right: 5px;
}
.staffContactInfo .fa-mobile {
  font-size: 22px;
}
.lrContactPictures {
  text-align: center;
  width: 100%;
  margin: 0 auto;
}
.lrStaffMember {
  width: 250px;
  height: auto;
}
.staffContactContainer {
  position: relative;
  border: 1px solid $grey;
  height: 600px;
}
.staffContactInfo {
  text-align: left;
  padding-bottom: 20px;
  width: 250px;
  margin: 0 auto;
  a {
    display: block;
  }
}
.mainText {
  text-align: left;
}
.adress {
  margin-top: 10px;
}
/* ****************** MEDIAQUERIES ****************** */
@media screen and (max-width: $tablet - 1px) {
  .quote {
    h3 {
      font-size: 5vw;
    }
  }
  .contactUs .lrHeaderLine {
    width: 50%;
  }
}
@media screen and (max-width: 616px) {
  .staffContactContainer {
    border: 1px solid transparent;
    height: auto;
  }
}
</style>

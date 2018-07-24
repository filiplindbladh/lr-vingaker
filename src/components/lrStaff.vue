<template>
  <div class="section container lrStaff">
    <h2> {{ this.staffTexts.staffHeading }}</h2>
    <hr class="lrHeaderLine">
    <p class="mainText" v-html="this.staffTexts.staffParagraph">
    </p>
    <!-- pictures of the staff on LR örebro -->
    <div class="columns is-multiline lrPictures">
      <div class="column is-half-tablet is-one-quarter-desktop" v-for="(member, index) in staffList" :key="index">
        <div class="staffContainer">
            <img class="lrStaffMember" :src="member.img.sizes.medium" alt="Staff member">
            <div class="staffInfo">
              <div class="transparentBox">
                <p> {{ member.name }}</p>
                <p>{{ member.role }}</p>
                <a v-if="member.mobile.length > 0" :href="'tel:' + member.mobile">
                  <i class="fa fa-phone icon-1x" aria-hidden="true"></i>
                </a>
                <a v-if="member.mail.length > 0" :href="'mailto:' + member.mail">
                  <i class="fa fa-paper-plane icon-1x" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lrStaff',
  data () {
    return {
    }
  },
  computed: {
    pages () {
      return this.$store.state.pages
    },
    staffTexts () {
      if (this.pages.length > 0) {
        return {
          staffHeading: this.pages[6].acf.staff_heading,
          staffParagraph: this.pages[6].acf.staff_paragraph
        }
      } else {
        return {
          staffHeading: '...',
          staffParagraph: '...'
        }
      }
    },
    posts () {
      return this.$store.state.posts
    },
    staffList () {
      let staff = this.posts.map(posts => posts.acf)
      return staff.reverse()
    }
  },
  watch: {
    staffList () {
      console.log('staff:', this.staffList)
    }
  }
}
</script>

<style lang="scss">
  .lrHeaderLine {
    background-color: $red;
    height:5px;
  }
  .lrStaff {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .staffContainer {
    position: relative;
  }
  .staffInfo {
    transition: all .3s ease-in-out;
    opacity: 0;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 6px;
    .fa {
      margin: 15px 12px 0 12px;
      color: $green;
      font-size: 25px;
    }
    .fa-phone {
      font-size: 30px;
    }
    .fa-paper-plane {
      margin-bottom: 5px;
      font-size: 29px;
    }
    p {
      color: white;
      font-weight: bold;
    }
    a {
      color: white;
      font-weight: bold;
      display: inline;
    }
    .transparentBox {
      background-color: rgba(0,0,0,0.6);
      display: inline-block;
      border-radius: 5px 5px 0 0;
      padding: 5px;
    }
  }
  .mainText {
    text-align: center;
    width: 70%;
    margin-bottom: 30px;
  }
  .lrPictures {
    text-align: center;
    width: 100%;
  }
  .lrStaffMember {
    width: 250px;
    height: auto;
  }
  .staffContainer:hover .lrStaffMember {
      -webkit-filter: blur(2px) grayscale(100%);
              filter: blur(2px) grayscale(100%);
    }
  .staffContainer:hover .staffInfo {
    opacity: 1;
  }
  /* ****************** MEDIAQUERIES ****************** */
  @media screen and (max-width: $tablet - 1px) {
    .staffInfo {
      opacity: 1;
    }
    .staffContainer:hover .lrStaffMember {
      -webkit-filter: none;
              filter: none;
    }
    .staffContainer {
      padding: 0;
      display: inline-block;
    }
    .transparentBox {
      width: 100%;
    }
    .lrStaff .lrHeaderLine {
      width:50%;
    }
  }
</style>

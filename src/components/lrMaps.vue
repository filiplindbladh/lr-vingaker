<template>
  <div class="section container lrMaps">
    <div class="heading-container">
      <h2> {{ this.mapsTexts.mapsHeading }} </h2>
      <hr class="lrHeaderLine">
    </div>

    <!-- maps -->
    <div id="map-responsive">
      <iframe id="lrMap" :src="this.mapsTexts.map" width="600" height="250" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>

  <!-- the social media icons -->
    <div class="lrSocialMedia">
      <div class="lrMediaItem">
        <a class="lrMediaIcon" href="http://lr-revision.se/" target="_blank"> <img src="../img/LR-sverige.png" alt="Logo LR Sverige"></a>
      </div>
      <div class="lrMediaItem">
        <a class="lrMediaIcon" href="https://www.facebook.com/" target="_blank"> <i class="fa fa-facebook-square" aria-hidden="true"></i> </a>
        <a class="lrMediaIcon" href="https://www.linkedin.com/" target="_blank"> <i class="fa fa-linkedin-square" aria-hidden="true"></i> </a>
      </div>
    </div>
</div> <!-- / section container -->
</template>

<script>
export default {
  name: 'lrMaps',
  computed: {
    pages () {
      return this.$store.state.pages
    },
    mapsTexts () {
      if (this.pages.length > 0) {
        return {
          mapsHeading: this.pages[6].acf.maps_heading,
          map: this.pages[6].acf.map
        }
      } else {
        return {
          mapsHeading: '...',
          map: '...'
        }
      }
    }
  }
}
</script>

<style lang="scss">
  .heading-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .lrHeaderLine {
    background-color: $red;
    height: 5px;
  }
  .lrSocialMedia {
    width: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .lrMediaItem {
    padding: 0 25px;
    .fa {
      font-size: 50px;
      margin-right: 10px;
    }
    .fa-facebook-square {
      color: $blue;
    }
    .fa-linkedin-square {
      color: $black;
    }
    img {
      width: 216px;
      height: auto;
    }
    .lrMediaIcon {
      transition: all .3s ease-in-out;
      transform: scale(0);
      :hover {
        transition: all .3s ease-in-out;
        transform: scale(1.1);
      }
    }
  }
  /* styles for the map */
  #map-responsive{
    overflow: hidden;
    padding-bottom: 350px;
    position: relative;
    height: 0;
    width: 100%;
  }
  #map-responsive #lrMap {
    width: 100%;
    height: 350px;
    left: 0;
    top: 0;
    position: absolute;
  }
  /* ****************** MEDIAQUERIES ****************** */
  @media screen and (max-width: 550px) {
    .lrSocialMedia {
      flex-direction: column;
    }
    .heading-container .lrHeaderLine {
      width: 50%;
    }
  }
</style>

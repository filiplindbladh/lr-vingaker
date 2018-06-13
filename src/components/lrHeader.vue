<template>
<div id="header">
  <!-- swiper -->
  <swiper :options="swiperOption">
    <swiper-slide>
      <div class="section header headerOne new-overlay">
        <div class="lrHeader container">
          <h1> VÄLKOMMEN TILL <br /> LR-REVISION VINGÅKER </h1>
          <hr class="lrHeaderLineHeader">
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="section header headerThree overlay">
        <div class="lrHeader container">
          <h2>HÅLL KOLL PÅ DIN<br> EKONOMI MED LR-ONLINE</h2>
          <hr class="lrHeaderLineHeader">
        </div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
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
  }
}
</script>
<style lang="scss">
.new-overlay:before {
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  background-color: rgba(0, 81, 146, 0.5);
}
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
  //margin-top: 30px;
  flex-direction: column;
}
.headerOne {
  background-image: url("../img/ving/header.jpeg");
}
.headerTwo {
  background-image: url("../img/headerTwo.jpg");
}
.headerThree {
  background-image: url("../img/headerThree.jpg");
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
</style>

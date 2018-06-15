<template>
  <div id="staff" class="section container lrStaff">
    <h2>Mer än bara siffror</h2>
    <hr class="lrHeaderLine">
    <p class="mainText">
      Vår byrå består av kompetent och engagerad personal. Vi gör vårt yttersta för att hjälpa Er företagare med vår kunskap och erfarenhet. På LR tycker vi att det är viktigt att bygga en långsiktig affärsmässig relation med våra kunder, där trygghet och förståelse för kundens verksamhet står i centrum.
    </p>
    <!-- pictures of the staff on LR örebro -->
    <div class="columns is-multiline lrPictures">
      <div class="column is-half-tablet is-one-quarter-desktop" v-for="(member, index) in staff" :key="index">
        <div class="staffContainer">
            <img class="lrStaffMember" :src="member.img" alt="Staff member Lr Örebro">
            <div class="staffInfo">
              <div class="transparentBox">
                <p> {{ member.name }}</p>
                <br>
                <p>{{ member.role }}</p>
                <br>
                <a :href="'tel:' + member.phone">
                  <i class="fa fa-phone icon-1x" aria-hidden="true"></i>
                </a>
                <a :href="'mailto:' + member.name">
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
      staff: [
        {
          name: 'Birgitta Larsson',
          role: 'Reception',
          img: require('../img/ving/birgitta-min.jpg'),
          phone: '015113631',
          mail: 'birgitta.larsson@lr-revision.se'
        },
        {
          name: 'Carolin',
          role: 'Roll',
          img: require('../img/ving/carolin-min.jpg'),
          phone: '0000',
          mail: 'email'
        },
        {
          name: 'Erika Nikolai',
          role: 'Roll',
          img: require('../img/ving/erika-min.jpg'),
          phone: '015113634',
          mail: 'erika.nikolai@lr-revision.se'
        },
        {
          name: 'Greta Hedlund',
          role: 'Roll',
          img: require('../img/ving/greta-min.jpg'),
          phone: '015113603',
          mail: 'greta.hedlund@lr-revision.se'
        },
        {
          name: 'Jonas Lotterberg',
          role: 'Roll',
          img: require('../img/ving/jonas-min.jpg'),
          phone: '015113609',
          mail: 'jonas.lotterberg@lr-revision.se'
        },
        {
          name: 'Linda Söderling',
          role: 'Roll',
          img: require('../img/ving/linda-min.jpg'),
          phone: '015113630',
          mail: 'linda.söderling@lr-revision.se'
        },
        {
          name: 'Tomas Schörling',
          role: 'Roll',
          img: require('../img/ving/tomas-min.jpg'),
          phone: '015113632',
          mail: 'tomas.schörling@lr-revision.se'
        }
      ]
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
    p, a {
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

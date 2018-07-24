<template>
<div>
    <div  id="sectionServices" class="section container">
        <h2>{{ this.servicesContent.servicesTitle }}</h2>
        <hr class="lrHeaderLine">

        <div class="services">
            <a href="/tjanster#redovisning">
                <div class="box redovisning">
                    <img class="boxImage" src="../img/accounting_icon.svg" alt="redovisning.png">
                    <h3>redovisning</h3>
                    <div class="triangle-bottomright"></div>
                </div>
            </a>
            <a href="/tjanster#radgivning">
                <div class="box consulting">
                    <img src="../img/consulting_icon.svg" alt="consultation.png">
                    <h3>rådgivning</h3>
                    <div class="triangle-bottomright"></div>
                </div>
            </a>
            <a href="/tjanster#revision">
                <div class="box revision">
                    <img class="boxImage" src="../img/revision_icon.svg" alt="revision.png">
                    <h3>revision</h3>
                    <div class="triangle-bottomright"></div>
                </div>
            </a>
        </div>
          <p><strong>{{ this.servicesContent.servicesSubheading }}</strong></p>
          <p class="mainText"
          v-html="this.servicesContent.servicesParagraph"
          ></p>
    </div>
</div>
</template>

<script>
export default {
  name: 'lrServices',
  computed: {
    pages () {
      return this.$store.state.pages
    },
    servicesContent () {
      if (this.pages.length > 0) {
        return {
          servicesTitle: this.pages[6].acf.services_title,
          servicesSubheading: this.pages[6].acf.services_subheading,
          servicesParagraph: this.pages[6].acf.services_paragraph
        }
      } else {
        return {
          servicesTitle: '...',
          servicesSubheading: '...',
          servicesParagraph: '...'
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
h2 {
  text-align: center;
}
.section {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.lrHeaderLine {
  background-color: $red;
  height:5px;
}
.services {
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 40px;
}
.box {
  position: relative;
  height: 300px;
  width: 300px;
  border: 2px solid $black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 25px;
  &:hover {
    background-color: white;
  }
  h3 {
    color: $white;
    z-index: 2;
  }
}
.consulting img {
  width: 80%;
  height: 211px;
}
.box:hover > .triangle-bottomright {
  border-left: 0 solid transparent;
  right: 0;
}
.box:hover > h3 {
  color: $black;
}
.triangle-bottomright {
  transition: all .3s ease-in-out;
  width: 0;
  height: 0;
  right: 0;
  top: 0;
  border-bottom: 300px solid $blue;
  border-left: 298px solid transparent;
  z-index: 1;
  position: absolute;
}
p {
  text-align: center;
  width: 70%;
}
.services .box .boxImage {
  height: 211px;
  max-width: 100%;
}

/* ****************** MEDIAQUERIES ****************** */
@media only screen and (max-width: 1024px) {
  .services {
    display: none;
  }
  .lrHeaderLine {
    width: 50%;
  }
}
@media #{$phones} {
  .services {
    display: none;
  }
}
</style>

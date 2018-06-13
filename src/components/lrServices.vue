<template>
  <div id="sectionServices" class="section container">
    <h2>Kompetens och engagemang som ger resultat</h2>
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
      <p class="mainText">
        <strong>Vad behöver du och ditt företag hjälp med?</strong><br/>Vi på LR Revision & Redovisning i Vingåker har stor kunskap och lång erfarenhet från en mängd olika branscher. Hos oss får du ett personligt och professionellt bemötande när vi hjälper dig att förvalta och utveckla ditt företag.
      </p>
  </div>
</template>

<script>
export default {
  name: 'lrServices'
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
  height: 5px;
}
.services {
  width: 100%;
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
  &:hover {
    background-color: white;
  }
  h3 {
    color:$white;
    z-index:2;
  }
}
.box:hover > .triangle-bottomright {
  border-left: 0 solid transparent;
  right: 0;
}
.box:hover > h3 {
    color: $black;
}
.consulting img {
    width: 80%;
    height: 211px;
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
@media screen and (max-width: $tablet - 1px) {
  .services {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
  .box {
    width: 220px;
    height: 220px;
    margin-bottom: 20px;
  }
  .triangle-bottomright {
    display: none;
  }
  .box > h3 {
    color: $black;
  }
  .lrHeaderLine {
    width: 50%;
  }
  .box img {
      width: 50%;
  }
}
@media screen and (min-width: $tablet) and (max-width: $desktop - 1px) {
  .box {
    margin: 25px;
  }
}
@media screen and (max-width: 395px) {
  .box {
    width: 220px;
    height: 220px;
  }
}
</style>

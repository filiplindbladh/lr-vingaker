<template>
    <div class="lrFooter">
      <div class="footer">
        <div class="container footer-container">
          <div class="footer-item">
            <h4>ADRESS</h4>
            <hr class="lrHeaderLine">
            <p>{{ this.footerTexts.adress }}</p>
          </div>
          <div class="footer-item">
            <h4>KONTAKT</h4>
            <hr class="lrHeaderLine">
            <ul>
              <li><a :href="'tel:' + this.footerTexts.vaxel">{{ this.footerTexts.vaxel }}</a></li>
              <li><a :href="'mailto:' + this.footerTexts.epost"> {{ this.footerTexts.epost }}</a></li>
            </ul>
          </div>
          <div class="footer-item">
            <h4>AKTUELLT</h4>
            <hr class="lrHeaderLine">
            <ul>
              <li><a href="static/news/Nyhetsbrev_Corona_2020-11-26.pdf" target="_blank">Nyhetsbrev Corona 2020-11-26</a></li>
              <li><a href="static/news/Nyhetsbrev_Juni_2020_(Nr.2).pdf" target="_blank">Nyhetsbrev Juni 2020 Nr 2</a></li>
              <li><a href="static/news/Nyhetsbrev_Nr1_april_2020.pdf" target="_blank">Nyhetsbrev April 2020 Nr 1</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-icon-container">
        <img class="footer-icon" src="../img/footer.svg" alt="footer-icon.svg">
      </div>
    </div>
</template>

<script>
export default {
  name: 'lrFooter',
  computed: {
    pages () {
      return this.$store.state.pages
    },
    footerTexts () {
      if (this.pages.length > 0) {
        return {
          adress: this.pages[0].acf.adress,
          epost: this.pages[0].acf.epost,
          vaxel: this.pages[0].acf.vaxel
        }
      } else {
        return {
          adress: '...',
          vaxel: '...',
          epost: '...'
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .footer {
    background-color: $blue !important;
  }
  .lrFooter {
    background-color: $blue !important;
    height: 100%;
    position: relative;
    a, p, h4 {
      color: white;
    }
    a:hover {
      text-decoration: underline;
    }
  }
  .lrHeaderLine {
    background-color: $red;
  }
  .footer-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 200px;
  }
  .footer-item {
    margin: 20px;
    z-index: 300;
  }
  .footer-item:first-of-type p {
    width: 50%;
  }
  .footer-icon-container {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-flow: column wrap;
  }
  /* ****************** MEDIAQUERIES ****************** */
  @media screen and (max-width: $tablet - 1px) {
    .footer-container {
      margin-bottom: 0;
      flex-direction: column;
    }
    .lrHeaderLine {
      width: 70%;
    }
  }
  @media screen and (min-width: $tablet) {
  }
</style>

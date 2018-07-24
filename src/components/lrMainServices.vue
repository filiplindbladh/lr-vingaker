<template>
  <div>
    <vue-tabs active-tab-color="white" active-text-color="black" centered v-scroll-to="{ y: true }">

      <v-tab class="v-tab" title="Redovisning">
        <div id="tabContent" class="section container tab-content">
          <div class="lrServices">
            <div class="lrServicesContent">
              <h3>Redovisning</h3>
              <p class="leadText" v-html="this.mainServicesContent.redovisning">
              </p>
            </div>
            <div class="lrServicesContent">
              <div class="lrServicesImg">
                <img :src="this.mainServicesContent.redovisningImg.url" alt="redovisning.png">
              </div>
            </div>
          </div>
        </div>
      </v-tab>

      <v-tab class="v-tab" title="Rådgivning">
        <div id="tabContent" class="section container tab-content">
          <div class="lrServices">
            <div class="lrServicesContent">
              <h3>Rådgivning</h3>
              <p class="leadText" v-html="this.mainServicesContent.radgivning">
              </p>
            </div>
            <div class="lrServicesContent">
              <div class="lrServicesImg">
                <img :src="this.mainServicesContent.radgivningImg.url" alt="radgivning.png">
              </div>
            </div>
          </div>
        </div>
      </v-tab>

      <v-tab class="v-tab" title="Revision">
        <div id="tabContent" class="section container tab-content">
          <div class="lrServices">
            <div class="lrServicesContent">
              <h3>Revision</h3>
              <p class="leadText" v-html="this.mainServicesContent.revision">
              </p>
            </div>
            <div class="lrServicesContent">
              <div class="lrServicesImg">
                <img :src="this.mainServicesContent.revisionImg.url" alt="revision.png">
              </div>
            </div>
          </div>
        </div>
      </v-tab>

      <v-tab class="v-tab" title="Bokslut">
        <div id="tabContent" class="section container tab-content">
          <div class="lrServices">
            <div class="lrServicesContent">
              <h3>Bokslut</h3>
              <p class="leadText" v-html="this.mainServicesContent.bokslut">
              </p>
            </div>
            <div class="lrServicesContent">
              <div class="lrServicesImg">
                <img :src="this.mainServicesContent.bokslutImg.url" alt="bokslut.png">
              </div>
            </div>
          </div>
        </div>
      </v-tab>

      <v-tab class="v-tab" title="Löneadministration">
        <div id="tabContent" class="section container tab-content">
          <div class="lrServices">
            <div class="lrServicesContent">
              <h3>Löneadministration</h3>
              <p class="leadText" v-html="this.mainServicesContent.loneadmin">
              </p>
            </div>
            <div class="lrServicesContent">
              <div class="lrServicesImg">
                <img :src="this.mainServicesContent.loneadminImg.url" alt="loneadmin.png">
              </div>
            </div>
          </div>
        </div>
      </v-tab>
    </vue-tabs>
  </div>
</template>

<script>
import { VueTabs, VTab } from 'vue-nav-tabs'
import Icon from 'vue-awesome/components/Icon.vue'
import lrTab from '@/components/lrTab.vue'
import lrTabs from '@/components/lrTabs.vue'
require('vue-animate/dist/vue-animate.min.css')

export default {
  name: 'lrMainServices',
  components: {
    VueTabs,
    VTab,
    Icon,
    lrTab,
    lrTabs
  },
  props: {
    textPosition: {
      type: 'center'
    },
    direction: {
      type: 'center'
    },
    selected: { default: false },

    centered: true
  },
  computed: {
    pages () {
      return this.$store.state.pages
    },
    mainServicesContent () {
      if (this.pages.length > 0) {
        return {
          redovisning: this.pages[4].acf.redovisning_text,
          redovisningImg: this.pages[4].acf.redovisning_img,
          radgivning: this.pages[4].acf.radgivning_text,
          radgivningImg: this.pages[4].acf.radgivning_img,
          revision: this.pages[4].acf.revision_text,
          revisionImg: this.pages[4].acf.revision_img,
          bokslut: this.pages[4].acf.bokslut_text,
          bokslutImg: this.pages[4].acf.bokslut_img,
          loneadmin: this.pages[4].acf.loneadmin_text,
          loneadminImg: this.pages[4].acf.loneadmin_img
        }
      } else {
        return {
          redovisning: '...',
          redovisningImg: '...',
          radgivning: '...',
          radgivningImg: '...',
          revision: '...',
          revisionImg: '...',
          bokslut: '...',
          bokslutImg: '...',
          loneadmin: '...',
          loneadminImg: '...'
        }
      }
    }
  }
}
</script>

<style lang="scss">
.vue-tabs .nav > li span.title {
  font-size:15px;
}
li.tab.active,
li.tab.active:hover {
  background-color: $white;
}
.vue-tabs .nav-tabs-justified > li > a,
.vue-tabs .nav-tabs.nav-justified > li > a {
  border-bottom: 1px solid transparent;
}
.tab {
  background-color:$blue;
  border-right: 1px solid white;
  .title {
    color:white;
  }
}
li.tab:hover {
  background-color: #eeeeee;
}
li.tab:hover .title {
  color:black;
}
.tabs__link > .title {
  color:$white;
}
.tabs__link:hover > .title {
  color:black;
}
.leadText {
  width: 95%;
  margin-right: 20px;
}
.v-tab {
  min-height: 100%;
}
.tab-content {
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .tab-container {
    display: block;
    -webkit-animation: fadeIn 0.5s;
    animation: fadeIn 0.5s;
  }
}
.icon {
  height:10px;
}
.lrHeaderLine {
  background-color: $red;
}
.paragraphContainer {
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
.paragraph {
  width: 50%;
}
.lrServicesContent h3, .lrServicesContent p.leadText, .lrServicesContent p {
  padding-bottom: 20px;
}
/* ****************** MEDIAQUERIES ****************** */
@media screen and (max-width: $tablet - 1px) {
  .quote {
    h3 {
      font-size: 5vw;
      text-align: left;
    }
  }
  .leadText {
    width: 100%;
    text-align: center;
  }
}
@media screen and (max-width: 920px ) {
  .paragraphContainer {
    flex-direction: column;
  }
  .paragraph {
    width: 100%;
  }
}
</style>

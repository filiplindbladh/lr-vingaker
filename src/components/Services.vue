<template>
    <div>
      <lrMenu></lrMenu>
      <lrServicesBanner></lrServicesBanner>
      <lrMainServices></lrMainServices>
      <lrBannerSlider></lrBannerSlider>
      <lrFooter></lrFooter>
    </div>
</template>

<script>
import lrMenu from '@/components/lrMenu.vue'
import lrMainServices from '@/components/lrMainServices.vue'
import lrFooter from '@/components/lrFooter.vue'
import lrBannerSlider from '@/components/lrBannerSlider.vue'
import lrServicesBanner from '@/components/lrServicesBanner.vue'

export default {
  name: 'Services',
  components: {
    lrMenu,
    lrMainServices,
    lrFooter,
    lrBannerSlider,
    lrServicesBanner
  }
}
</script>

<style scoped lang="scss">
</style>

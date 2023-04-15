<template>
  <Layout>
    <Partnerzy></Partnerzy>
    <Slider></Slider>
  </Layout>
</template>

<script>
import Partnerzy from "../components/Partnerzy"
import Slider from "../components/partnerzy/Slider"
export default {
  metaInfo: {
    title: 'Partnerzy'
  },
  components: {
    Partnerzy,
    Slider
  }
}
</script>

<template>
  <Layout>
    <Ofirmie1></Ofirmie1>
    <Ofirmie2></Ofirmie2>
    <div class="ofirmie2__image3">
        <g-image v-in-viewport src="~/assets/img/ofirmie_3.jpg" />        
    </div>
  </Layout>
</template>

<script>
import Ofirmie1 from "../components/o_firmie/Ofirmie1"
import Ofirmie2 from "../components/o_firmie/Ofirmie2"
export default {
  metaInfo: {
    title: 'O firmie',
    meta: [
      { name: 'author', content: 'Jerzy Nowak' },
      { key: 'description', name: 'description', content: 'foo' }
    ]
  },
  components: {
    Ofirmie1,
    Ofirmie2
  }
}

</script>

<style lang="scss">
.ofirmie2__image3 {
  img {
    width: 100%;
  height: auto;
  }
  
}
</style>

<template>
  <Layout>
    <Realizacje></Realizacje>
  </Layout>
</template>

<script>
import Realizacje from "../components/Realizacje"
export default {
  metaInfo: {
    title: 'Realizacje'
  },
  components: {
    Realizacje
  }
}
</script>

<style lang="scss">

.Realizacje .category-header {
  margin-left: 170px;
  @include mq($max-width: 1350px) {
    margin-left: 100px
  }
  @include mq($max-width: 1200px) {
    margin-left: 80px
  }
  @include mq($max-width: 992px) {
    margin-left: 50px
  }
  @include mq($max-width: 768px) {
    margin-left: 30px
  }
}
footer {
  margin-top: 100px;
}
</style>
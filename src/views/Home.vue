<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img1.jpg">
    <TabMenu msg="Portfolio"/>
  </div>
</template>


<script>
// @ is an alias to /src
import TabMenu from '@/components/TabMenu.vue'

export default {
  name: 'Home',
  components: {
    TabMenu
  },
}
</script>

    <style scoped lang="scss">
    .home{
      img{
        width: 100%;
        height: 500px;
      }
    }
    </style>
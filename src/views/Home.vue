<template>
  <div class="home">
    <img src="@/assets/engineer.jpg">
    <TabMenu msg="Portfolio" id="portfolio"/>
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
      color: #333;
      img{
        width: 100%;
        height: 500px;
        object-fit: cover;
        margin-top: 80px;
      }
    }
    </style>
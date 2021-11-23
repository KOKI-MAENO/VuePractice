<template>
<div>
    <ListContent title="ポートフォリオサイト" url="" image="portfolio-site.png"/>
    <ListContent title="製薬会社のポータルサイト" url="https://dictportal.com/" image="portfolio-dict.png"/>
    <ListContent title="採用サービスのLP" url="https://migitech.co.jp/wantedly-service/" image="portfolio-recruitLP.png"/>
</div>
</template>

<script>
import ListContent from "../Molecules/List-content.vue";

export default {
    name: 'SiteItem',
    components: { ListContent },
    
}
</script>

<style lang="scss" scoped>
    div{
        width: 80%;
        margin: 75px auto;
        display: flex;
        justify-content: center;
    }
</style>
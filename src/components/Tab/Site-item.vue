<template>
<ul>
    <ListContent v-for="item in items" :key="item.index" :title="item.title" :url="item.url" :image="item.image"/>
</ul>
</template>

<script>
import ListContent from "../Molecules/List-content.vue";

export default {
    name: 'SiteItem',
    components: { ListContent },
    data () {
        return{
            items:[
                { index: 1, title: 'ポートフォリオサイト', url: '', image: 'portfolio-site.png'},
                { index: 2, title: '製薬会社のポータルサイト', url: 'https://dictportal.com/', image: 'portfolio-dict.png'},
                { index: 3, title: '採用サービスのLP', url: 'https://migitech.co.jp/wantedly-service/', image: 'portfolio-recruitLP.png'},
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
    ul{
        width: 85%;
        margin: 75px auto;
        display: flex;
        justify-content: center;
        padding: 0;
    }
</style>
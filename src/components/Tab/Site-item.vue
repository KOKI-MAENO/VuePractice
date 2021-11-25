<template>
<ul>
    <ListContent v-for="item in items" :key="item.index" :title="item.title" :demo_url="item.demo_url" :image="item.image" :git_url="item.git_url" :desc="item.desc" :skills="item.skills"/>
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
                { index: 1, title: 'ポートフォリオサイト', image: 'portfolio-site.png', git_url: 'https://github.com/KOKI-MAENO/VuePractice', desc:'製薬会社のポータルサイト。WPを使い、動画投稿・ブログ機能のあるサイトを作った。マークアップエンジニアとして参画。', skills:'HTML, CSS, Javascript(jQuery), WP'},
                { index: 2, title: '製薬会社のポータルサイト', demo_url: 'https://dictportal.com/', image: 'portfolio-dict.png'},
                { index: 3, title: '採用サービスのLP', demo_url: 'https://migitech.co.jp/wantedly-service/', image: 'portfolio-recruitLP.png'},
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
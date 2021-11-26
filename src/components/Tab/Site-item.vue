<template>
<ul>
    <ListContent v-for="item in items" :key="item.index" :title="item.title" :demo_url="item.demo_url" :image1="item.image1" :image2="item.image2" :image3="item.image3" :git_url="item.git_url" :desc="item.desc" :skills="item.skills"/>
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
                { index: 1, title: 'ポートフォリオサイト', desc:'前野航希のポートフォリオサイト。', skills:'HTML, CSS, Javascript(Vue.js) ', image1: 'portfolio-site_1.png', image2: 'portfolio-site_2.png', image3: 'portfolio-site_3.png', git_url: 'https://github.com/KOKI-MAENO/VuePractice', },
                { index: 2, title: '製薬会社のポータルサイト', desc:'製薬会社のポータルサイト。WPを使い、動画投稿・ブログ機能のあるサイトを作った。マークアップエンジニアとして参画。', skills:'HTML, CSS, Javascript(jQuery), WP', demo_url: 'https://dictportal.com/', image1: 'portfolio-dict_1.png', image2: 'portfolio-dict_2.png', image3: 'portfolio-dict_3.png'},
                { index: 3, title: '採用サービスのLP', demo_url: 'https://migitech.co.jp/wantedly-service/', image1: 'portfolio-recruitLP.png'},
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
        justify-content: space-around;
        padding: 0;
    }
</style>
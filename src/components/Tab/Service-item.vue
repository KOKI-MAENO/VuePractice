<template>
<ul>
    <ListContent v-for="item in items" :key="item.index" :title="item.title" :demo_url="item.demo_url" :image="item.image" :git_url="item.git_url" :desc="item.desc" :skills="item.skills"/>
</ul>
</template>

<script>
import ListContent from "../Molecules/List-content.vue";


export default {
    name: 'ServiceItem',
    components: { ListContent },
    data () {
        return{
            items:[
                { index: 1, },
                { index: 2, },
                { index: 3, },
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
        padding:0;
    }
</style>
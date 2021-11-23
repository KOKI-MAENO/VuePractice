<template>
<div>
    <ListContent title="Todoアプリ" url="/about" />
    <ListContent title="チャットアプリ"/>
    <ListContent title="タイピングゲーム"/>
</div>
</template>

<script>
import ListContent from "../Molecules/List-content.vue";


export default {
    name: 'ServiceItem',
    components: { ListContent }

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
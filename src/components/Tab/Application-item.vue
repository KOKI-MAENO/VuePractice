<template>
<div>
    <ListContent title="アプリ1"/>
    <ListContent title="アプリ2"/>
    <ListContent title="アプリ3"/>
</div>
</template>

<script>
import ListContent from "../Molecules/List-content.vue";
export default {
    name: "ApplicationItem",
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
<template>
<div>
    <ListContent />
    <ListContent />
    <ListContent />
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
        width: 85%;
        margin: 75px auto;
        display: flex;
        justify-content: center;
    }
</style>
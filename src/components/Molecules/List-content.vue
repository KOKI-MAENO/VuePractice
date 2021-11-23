<template>
<div class="list_container">
    <a v-bind:href=url>
        <div class="image_box">
            <img v-bind:src="require(`@/assets/${image}`)" :alt="image">
        </div>
        <div class="content_box">
            <p>{{title}}</p>
        </div>
    </a>
</div>
</template>

<script>
export default {
    name: 'ListContent',
    props:{
        title: String,
        url: String,
        image:{
            type: String,
            default: 'img1.jpg'
        },
    },
}
</script>

<style lang="scss" scoped>
.list_container{
    position: relative;
    margin: 0 auto;
    width: 25%;
    height: 250px;
    overflow:hidden;
    .image_box{
        img{
            width: 380px;
            height: 250px;
            object-fit: cover;
        }
    }
    .content_box{
        position: absolute;
        bottom: 0;
        width: 380px;
        height: 70px;
        background:  #000;
        opacity: 0.6;
        font-weight: bold;
        p{
            color: #fff;
            line-height: 70px;
            margin: 0;
        }
    }
}
</style>
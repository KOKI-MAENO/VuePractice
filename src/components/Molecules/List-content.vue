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
        title:{
            type:String,
            default: '制作中',
        },
        url: String,
        image:{
            type: String,
            default: 'coming-soon.jpg'
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
    box-shadow: 0 0 3px 0 rgba(0,0,0,.15), 0 2px 3px 0 rgba(0,0,0,.25);
	transition: .35s;
    cursor: pointer;
    &::before{
        content: "";
        width: 40px;
        height: 40px;
        background-size: contain;
        background-image: url(../../assets/bracket.png);
        position: absolute;
        left: -27px;
        top: -15px;
        background-repeat: no-repeat;
    }
    &::after{
        content: "";
        width: 40px;
        height: 40px;
        background-size: contain;
        background-image: url(../../assets/bracket.png);
        transform: scale(-1, -1);
        position: absolute;
        right: -27px;
        bottom: -15px;
        background-repeat: no-repeat;
    }
    &:hover{
        box-shadow: 0 16px 32px -6px rgba(0,0,0,.22), 0 0 6px rgba(0,0,0,.18);
        transform: translateY(-7px);
    }
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
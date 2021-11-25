<template>
<div>
    <li class="list_container">
        <div v-on:click="openModal">
        <div class="image_box">
            <img v-bind:src="require(`@/assets/${image}`)" :alt="image">
        </div>
        <div class="content_box">
            <p>{{title}}</p>
        </div>
        </div>
    </li>

    <div id="overlay" v-show="showContent" v-on:click="closeModal">
        <div class="modal_window">
            <div class="writing_section">
                <div class="about_area">
                    <h3 class="about_head head">{{title}}</h3>
                    <p class="about_content content">{{desc}}</p>
                    <a class="link" v-if="demo_url" v-bind:href=demo_url>Demo</a>
                    <a class="link" v-if="git_url" v-bind:href=git_url>Github</a>
                </div>
                <div class="skillset_area">
                    <h3 class="skillset_head head">使用言語など</h3>
                    <p class="skillset_content content">{{skills}}</p>
                </div>
            </div>
            <div class="slide_section">
                <img v-bind:src="require(`@/assets/${image}`)" :alt="image">
            </div>
            <div class="close" v-on:click="closeModal">×</div>
        </div>
    </div>
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
        demo_url:{
            type: String,
        },
        image:{
            type: String,
            default: 'coming-soon.jpg'
        },
        git_url:{
            type: String,
        },
        desc:{
            type: String,
        },
        skills:{
            type: String,
        },
    },
    data(){
        return{
            showContent: false
            }
        },
        methods:{
    openModal: function(){
        this.showContent = true
    },
    closeModal: function(){
        this.showContent = false
    }
    }
}
</script>

<style lang="scss" scoped>
.list_container{
    position: relative;
    margin: 0 auto;
    width: 80%;
    height: 250px;
    box-shadow: 0 0 3px 0 rgba(0,0,0,.15), 0 2px 3px 0 rgba(0,0,0,.25);
    list-style: none;
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
        top: -20px;
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
        bottom: -20px;
        background-repeat: no-repeat;
    }
    &:hover{
        box-shadow: 0 16px 32px -6px rgba(0,0,0,.22), 0 0 6px rgba(0,0,0,.18);
        transform: translateY(-7px);
    }
    .image_box{
        img{
            width: 100%;
            height: 250px;
            object-fit: cover;
        }
    }
    .content_box{
        position: absolute;
        bottom: 0;
        font-weight: bold;
        width: 100%;

        p{
            color: #fff;
            height: 50px;
            line-height: 50px;
            margin: 0;
            background-color: rgba(0,0,0, 0.6);
        }
    }
}
#overlay{
    z-index:1;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    .modal_window{
        z-index:2;
        width:75%;
        height: 25em;
        padding-top: 5em;
        padding-bottom: 5em;
        background-color: #fff;
        border-radius: 5px;
        display: flex;
        position: relative;
        text-align: center;
        .writing_section{
            width: 40%;
            padding: 0 5em;
        }
        .head{
            display: inline-block;
            font-weight: bold;
            font-size: 1.5em;
            border-bottom: 3px solid #000;
            padding:5px;
        }
        .content{
            text-align: left;
        }
        .link{
            display: block;
            text-align: left;
        }
        .slide_section{
            width: 60%;
            img{
                width: 60%;
                filter: drop-shadow(6px 6px 6px rgba(0,0,0,0.2));
            }
        }
        .close{
            position: absolute;
            top: 10px;
            right: 10px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #000;
            color: #fff;
            font-weight: bold;
            line-height: 50px;
            font-size: 40px;
            cursor: pointer;
        }
    }
}

</style>
<template>
<div>
<div class="tab">
  <div class="tab_box container">
    <h1>{{ msg }}</h1>
    <div class="tab_menu">
      <ul class="tab_list">
        <li @click="changeTab('1')" v-bind:class="{'active': isActive === '1'}">WEBサイト</li>
        <li @click="changeTab('2')" v-bind:class="{'active': isActive === '2'}">WEBサービス</li>
        <li @click="changeTab('3')" v-bind:class="{'active': isActive === '3'}">アプリ</li>
      </ul>
    </div>
  </div>
</div>
<div class="container">
  <div class="article">
    <SiteItem v-show="isActive === '1'" class="item"/>
    <ServiceItem v-show="isActive === '2'" class="item"/>
    <ApplicationItem v-show="isActive === '3'" class="item"/>
  </div>
</div>
</div>
</template>

<script>
import SiteItem from '@/components/Tab/Site-item.vue';
import ServiceItem from '@/components/Tab/Service-item.vue';
import ApplicationItem from '@/components/Tab/Application-item.vue';

export default {
    name: "TabMenu",
    props: {
        msg: String
    },
    data() {
        return { isActive: '1', };
    },
    methods: {
        changeTab(val) {
            this.isActive = val;
        },
    },
    components: { SiteItem, ServiceItem, ApplicationItem },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tab_box{
  margin-top: 100px;
  height: 200px;
  box-sizing: border-box;
  z-index: 0;
  h1{
    width: 200px;
    margin: 0 auto 75px;
    padding-bottom: 2px;
    border-bottom: 4px solid #040404;
  }
  .tab_menu{
    width: 60%;
    height: 45px;
    margin: 0 auto;
    border: 3px solid #040404;
    .tab_list {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          justify-content: space-around;
      li {
        line-height: 45px;
        position: relative;
          width : calc(100% / 3) ;
          padding: 0px 20px;
          cursor: pointer;
          font-weight: bold;
      }
      li:not(:first-child) {
        border-left: none;
      }
      li.active {
        background-color:#333;
          color:#fff;
          cursor: auto;
        &::before{
          position: absolute;
          top: 45px;
          left: 50%;
          transform: translateX(-50%);
          -webkit-transform: translateX(-50%);
          -ms-transform: translateX(-50%);
          content: "";
          border-top: 20px solid #333;
          border-right: 25px solid transparent;
          border-left: 25px solid transparent;
        }
      }
    }
    }
  .article{
        overflow: hidden;
        margin-top: -1px;
    }
  }
</style>

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
    component: {
        SiteItem,
        ServiceItem,
        ApplicationItem,
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
  h1{
    width: 200px;
    margin: 0 auto;
    border-bottom: 5px solid #040404;
  }
  .tab_menu{
    .tab_list {
          overflow: hidden;
          list-style: none;
      li {
          float: left;
          padding: 10px 20px;
          cursor: pointer;
          transition: .3s;
      }
      li:not(:first-child) {
          border-left: none;
      }
      li.active {
          border-bottom: 3px solid #000;
          cursor: auto;
      }
    }
    }
  .article{
        overflow: hidden;
        margin-top: -1px;
    }
  }
</style>

<template>
  <div id="app">
    <div id="nav">
      <div class="logo_container">
        <img src="@/assets/monotokoto.svg" alt="" class="logo">
      </div>
      <div class="header_menu">
      <router-link to="/">Home</router-link> |
      <router-link  :to="{ name: 'home', hash: '#portfolio'}">Portfolio</router-link> | 
      <router-link to="/contact">Contact</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import 'normalize.css'

export default {
  name: 'App',
    }
</script>

<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  text-align: center;
  color: #fff;
  #nav{
    display: flex;
    position: fixed;
    top:0;
    background-color: #000;
    width: 100%;
    height: 80px;
    .logo_container{
      color: #fff;
      .logo{
        height: 80px;
        line-height: 80px;
        margin: 15px 0 0 35px ;
        }
    }
    .header_menu {
      box-sizing: border-box;
      padding: 25px;
      margin-left: auto;
    a {
      position: relative;
      display: inline-block;
      font-weight: bold;
      font-size: 1.2em;
      color: #fff;
      text-decoration: none;
      margin: 0px 5px;
      padding: 5px 10px;
      }
    a.router-link-exact-active{
      &::before{
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        border-bottom: 2px solid #fff;
        animation: border_anim 0.2s linear forwards;
      }
      }
    }
  }
}
@keyframes border_anim {
	0%{
		width: 0%;
	}
	100%{
		width: 100%;
	}
}
</style>

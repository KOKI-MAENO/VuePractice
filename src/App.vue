<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/service">Service</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  #nav {
    margin-right: 50px;
    padding: 30px;
    text-align: right;
  a {
    font-weight: bold;
    font-size: 1.2em;
    color: #2c3e50;
    text-decoration: none;
    padding: 5px 10px;
    }
  a.router-link-exact-active {
    color: blue;
    }
  }
}
</style>

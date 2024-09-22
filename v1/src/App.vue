<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <User></User> -->
     <Parent></Parent>
     <RefC></RefC>
</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import User from "./components/User.vue"
import Parent from "./components/Parent.vue"
import RefC from "./components/RefC.vue"

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // User
    Parent,
    RefC
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

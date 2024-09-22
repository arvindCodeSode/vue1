<template>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/user/arvind">Arvind</RouterLink>
  <RouterLink to="/user/sonu">Sonu</RouterLink>
  <RouterLink to="/user/rahul">Rahul</RouterLink>
  <router-view></router-view>

</template>

<script>


export default {
  name: 'App',

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

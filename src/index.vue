<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <div class="hello">
    <h3>Vue-Router Test</h3>
    <ul>
      <li><router-link to="/page1">Go to Page1</router-link></li>
      <li><router-link to="/page2">Go to Page2</router-link></li>
    </ul>
  </div>

  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  provide: {
    $tester: window.tester
  },
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

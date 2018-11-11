<template>
  <div id="app">
    <div id="header">
      <div id="logo">Editor</div>
      <div id="nav">
        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/bar">Go to Bar</router-link>
      </div>
    </div>
    <router-view id="router-view"></router-view>
  </div>
</template>
<style lang="scss">
body{
  margin: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0px;
  padding: 0px;
  top:0px;
  left:0px;
}
#logo{
  font-weight: 700;
  display: inline-block;
}
#router-view{
  display: block;
}
#header{
  top:0px;
  left:0px;
  border: 1px solid #d9d9d9;
  padding: 20px;
  display: block;
  #nav {
  padding: 20px;
  top: 0px;
  right: 0px;
  position: absolute;
  display: block;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
}

</style>

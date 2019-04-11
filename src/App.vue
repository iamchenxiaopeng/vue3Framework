<template>
  <div id="app">
    <div id="nav">
      <a @click="changeLang">切换语言</a>
      <h2>{{$t('lang')}}</h2>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    changeLang(){
      this.$i18n.locale = this.$i18n.locale==='zh-CN'?'en-US':'zh-CN'
      localStorage.setItem('targetLang', this.$i18n.locale)
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    font-size: 24px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

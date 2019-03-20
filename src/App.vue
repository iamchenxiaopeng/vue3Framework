<template>
  <div id="app">
    <div>
      <p>
        If iView is successfully added to this project, you'll see an
        <code v-text="'<Button>'"></code>
        below
      </p>
      <Button type="primary" style="color: #000">Button</Button>
    </div>
    <router-link :to="{path: '/about'}">about</router-link>
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

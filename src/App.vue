<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link :to="{ name: 'counter' }">Counter</router-link>
    <router-link :to="{ name: 'about' }">About</router-link>
  </div>

  <div id="app">
    <router-view v-slot="{ Component, name }">
      <keep-alive>
        <component :is="Component" :key="name" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped lang="css">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

#nav {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 5px;
  padding: 10px;
}
</style>

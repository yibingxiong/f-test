<template>
  <div id="app">
    <img alt="Vue logo" src="../assets/logo.png" />
    <router-link to="/hello">Go to hello</router-link>
    <button @click="gotoHello">点我进hello页面</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    gotoHello() {
      // debugger;
      this.$router.push({
        name: "hello",
        params: { id: '3333' },
        query: { name: "xxxxxxxxxxxxx" },
      });
    },
  },
};
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

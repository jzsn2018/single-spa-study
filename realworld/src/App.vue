<!--
 * @Date: 2021-09-28 10:53:40
 * @LastEditors: Timothy
 * @LastEditTime: 2021-09-28 14:29:24
 * @Description: 
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div style="margin-top: 20px">
      <router-link to="/foo" style="margin-right: 20px">Foo</router-link>
      <router-link to="/bar">Bar</router-link>
      <router-view style="margin-top: 20px"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  text-align: center;
  font-size: 20px;
}
</style>

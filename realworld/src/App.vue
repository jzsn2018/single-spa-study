<!--
 * @Date: 2021-09-28 10:53:40
 * @LastEditors: Timothy
 * @LastEditTime: 2021-09-29 12:54:57
 * @Description: 
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Parcel :config="parcelConfig" :mountParcel="mountParcel"></Parcel>
    <!-- 公共模块测试 -->
    <h3 @click="testUtils">
      Click this to test common utils , show log at Dev Tools Panel
    </h3>
    <div style="margin-top: 20px">
      <router-link to="/foo" style="margin-right: 20px">Foo</router-link>
      <router-link to="/bar">Bar</router-link>
      <router-view style="margin-top: 20px"></router-view>
    </div>
  </div>
</template>

<script>
import Parcel from "single-spa-vue/dist/esm/parcel";
import { mountRootParcel } from "single-spa";
export default {
  name: "App",
  data() {
    return {
      mountParcel: mountRootParcel,
      parcelConfig: window.System.import("@slb-broker/navbar"),
    };
  },
  components: { Parcel },
  methods: {
    async testUtils() {
      let utils = await window.System.import("@slb-broker/utils");
      utils.getSlbVersion("@slb-broker/realworld");
    },
  },
  async mounted() {
    let utils = await window.System.import("@slb-broker/utils");
    utils.sharedSubject.subscribe((message) =>
      console.log(
        `%c[@slb-broker/realworld:test:rxjs]${message}`,
        "color: purple"
      )
    );
  },
};
</script>

<style>
#app {
  text-align: center;
  font-size: 20px;
}
</style>

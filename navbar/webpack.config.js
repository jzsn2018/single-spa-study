/*
 * @Date: 2021-09-28 14:43:39
 * @LastEditors: Timothy
 * @LastEditTime: 2021-09-28 17:53:17
 * @Description: 
 */
const {
  merge
} = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "slb-broker",
    projectName: "navbar",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    externals: ['react-router-dom']
  });
};
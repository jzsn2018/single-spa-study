/*
 * @Date: 2021-09-27 11:35:20
 * @LastEditors: Timothy
 * @LastEditTime: 2021-09-27 20:23:49
 * @Description: 
 */
const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "slb-broker",
    projectName: "todos",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    externals:['react-router-dom']
  });
};

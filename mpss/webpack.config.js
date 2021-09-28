/*
 * @Date: 2021-09-26 17:42:14
 * @LastEditors: Timothy
 * @LastEditTime: 2021-09-26 17:54:36
 * @Description: 
 */
const {
  merge
} = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");


module.exports = () => {
  const defaultConfig = singleSpaDefaults({
    orgName: "slb-broker", // 组织名称
    projectName: "mpss", // 项目名称
  })

  return merge(defaultConfig, {
    devServer: {
      port: 9001
    }
  })
}
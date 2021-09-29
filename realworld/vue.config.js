/*
 * @Date: 2021-09-28 11:13:59
 * @LastEditors: Timothy
 * @LastEditTime: 2021-09-28 18:40:10
 * @Description: 
 */

module.exports = {
  chainWebpack: config => {
    config.externals(["vue", "vue-router", "single-spa"])
  }
}
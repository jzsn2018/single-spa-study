/*
 * @Date: 2021-09-10 15:30:39
 * @LastEditors: Timothy
 * @LastEditTime: 2021-09-29 16:43:24
 * @Description: 
 */
import {
  registerApplication,
  start
} from "single-spa";

// 默写写法
// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

//! 传统的api定义路由
// 更加灵活的写法来控制路由显示
// registerApplication("@single-spa/welcome",
//   () =>
//   System.import(
//     "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//   ),
//   location => location.pathname === "/"
// );

// registerApplication({
//   name: "@slb-broker/mpss",
//   app: () => System.import("@slb-broker/mpss"),
//   activeWhen: ["/mpss"]
// });

// registerApplication({
//   name: "@slb-broker/todos",
//   app: () => System.import("@slb-broker/todos"),
//   activeWhen: ["/todos"]
// });
// registerApplication({
//   name: "@slb-broker/realworld",
//   app: () => System.import("@slb-broker/realworld"),
//   activeWhen: ["/realworld"]
// });

//! 路由引擎注册路由
import {
  constructApplications,
  constructRoutes
} from "single-spa-layout";
// 获取路由配置对象
const routes = constructRoutes(document.querySelector("#single-spa-layout"));
// 获取路由信息数组
const applications = constructApplications({
  routes,
  loadApp({
    name
  }) {
    return System.import(name);
  }
})
// 遍历路由信息注册应用
applications.forEach(registerApplication)

start({
  urlRerouteOnly: true,
});
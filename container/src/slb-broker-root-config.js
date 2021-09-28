/*
 * @Date: 2021-09-10 15:30:39
 * @LastEditors: Timothy
 * @LastEditTime: 2021-09-28 11:32:51
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

// 更加灵活的写法来控制路由显示
registerApplication("@single-spa/welcome",
  () =>
  System.import(
    "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
  ),
  location => location.pathname === "/"
);

registerApplication({
  name: "@slb-broker/mpss",
  app: () => System.import("@slb-broker/mpss"),
  activeWhen: ["/mpss"]
});

registerApplication({
  name: "@slb-broker/todos",
  app: () => System.import("@slb-broker/todos"),
  activeWhen: ["/todos"]
});
registerApplication({
  name: "@slb-broker/realworld",
  app: () => System.import("@slb-broker/realworld"),
  activeWhen: ["/realworld"]
});

start({
  urlRerouteOnly: true,
});
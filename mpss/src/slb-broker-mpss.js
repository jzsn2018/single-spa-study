/*
 * @Date: 2021-09-26 17:56:52
 * @LastEditors: Timothy
 * @LastEditTime: 2021-09-27 10:58:35
 * @Description: mpss 项目的入口文件
 */

let mpssContainer = null;
export async function bootstrap() {
  console.log("mpss application is running");
}

export async function mount() {
  console.log("mpss application is mounting");
  mpssContainer = document.createElement("div");
  mpssContainer.innerHTML = "Hello Mpss!" + Date.now();
  mpssContainer.id = "mpss-container";
  document.body.appendChild(mpssContainer);
}

export async function unmount() {
  console.log("mpss application is unmounting");
  document.body.removeChild(mpssContainer);
}
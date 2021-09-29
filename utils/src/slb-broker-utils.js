/*
 * @Date: 2021-09-28 19:10:35
 * @LastEditors: Timothy
 * @LastEditTime: 2021-09-29 11:18:21
 * @Description: 
 */
// Anything exported from this file is importable by other in-browser modules.
export function getSlbVersion(platform) {
  console.log(`%c [@slb-broker/utils] ${platform} say hello~${Date.now()}`, "color: purple")
}

import {
  ReplaySubject
} from "rxjs"
export const sharedSubject = new ReplaySubject();
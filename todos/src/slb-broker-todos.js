/*
 * @Date: 2021-09-27 11:35:20
 * @LastEditors: Timothy
 * @LastEditTime: 2021-09-27 12:02:23
 * @Description: 
 */
import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
  domElementGetter:()=>document.getElementById("todos")
});

export const { bootstrap, mount, unmount } = lifecycles;

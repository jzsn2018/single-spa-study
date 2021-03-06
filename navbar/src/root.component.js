/*
 * @Date: 2021-09-28 14:43:39
 * @LastEditors: Timothy
 * @LastEditTime: 2021-09-28 18:08:21
 * @Description: 
 */
import {
  Link,
  BrowserRouter
} from "react-router-dom";
import "./root.css";
export default function Root(props) {
  return (<BrowserRouter>
    <div className="navbar-wrap">
    <Link to="/">@slb-broker/welcome</Link>{" "}
    <Link to="/mpss">@slb-broker/mpss</Link>{" "}
    <Link to="/todos">@slb-broker/todos</Link>{" "}
    <Link to="/realworld">@slb-broker/realworld</Link>{" "}
    </div>
  </BrowserRouter>)
}
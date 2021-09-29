/*
 * @Date: 2021-09-27 11:35:20
 * @LastEditors: Timothy
 * @LastEditTime: 2021-09-28 18:11:44
 * @Description: 
 */
import {
  BrowserRouter,
  Route,
  Switch,
  Link 
} from "react-router-dom";
import Home from "./Home"
import About from "./About"
import "./root.css";
import Parcel from "single-spa-react/parcel"
export default function Root(props) {
  return (
    <section>
    <Parcel config={System.import("@slb-broker/navbar")}/>
    {props.name} is mounted!
    <BrowserRouter basename="/todos">
      <div className="root-nav">
        <Link to="/home">首页</Link>
        <Link to="/about">关于</Link>
      </div>
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/" redirect={'/home'}/>
      </Switch>
    </BrowserRouter>
  </section>
  );
}
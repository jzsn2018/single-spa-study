/*
 * @Date: 2021-09-27 11:35:20
 * @LastEditors: Timothy
 * @LastEditTime: 2021-09-28 10:43:42
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
export default function Root(props) {
  return (
    <section>
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
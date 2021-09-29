/*
 * @Date: 2021-09-27 20:20:59
 * @LastEditors: Timothy
 * @LastEditTime: 2021-09-29 12:54:43
 * @Description: 
 */
import {
  useEffect, useState
} from "react"

function useUtilsModule() {
  const [utilModule,setUtilModule] = useState();
  useEffect(() => {
    System.import("@slb-broker/utils").then(setUtilModule);
  })
  return utilModule;
}

export default function Home() {
  const utilModule = useUtilsModule();
  useEffect(() => {
    let subjection = null;
    if(utilModule){
      subjection = utilModule.sharedSubject.subscribe((message) => console.log(`%c[@slb-broker/todos:test:rxjs]${message}`,"color: purple"));
    }
    return () => subjection && subjection.unsubscribe();
  },[utilModule])
  if(utilModule) utilModule.getSlbVersion("@slb-broker/todos")
  return <div> Home Page <button onClick={()=>utilModule.sharedSubject.next("Hello Hello Hello")}>Rxjs send message</button> </div>
}
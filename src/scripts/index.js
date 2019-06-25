


console.log("这是 react  js 部分 ");

import { HashRouter as Router, Route, Link, Switch, Redirect,NavLink } from 'react-router-dom'

import store from "@/redux/store";


import ReactDOM from "react-dom";



// api 
// 1. 创建组件 
// 2. 渲染组件 成 真实 DOM 

import {IndexView} from './views/index'


class App extends React.Component {

 

    render() {
        return (
            <div>          
               
                 <IndexView/>
            </div>
        )
    }
}




const hotRender=()=>{
    ReactDOM.render(
        <App></App>,
        document.getElementById("app")
    )
}   



hotRender();

store.subscribe(hotRender)






// // 构造函数
// class Person {
//     constructor() {

//     }
// }

// // ES6 继承
// class Student extends Person {
//     constructor() {
//         super();  // 继承父类
//     }
// }


// function User() {

// }

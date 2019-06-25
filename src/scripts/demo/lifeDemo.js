



/*
 react 组件的生命周期
 含义   组件从初始化渲染到被移除或者销毁的过程  成为组件的生命周期

 1. 每个组件都有生命周期
 2. react 通过组件的生命周期钩子函数来管理 组件
 3. 系统 某些状态和参数发生改变的时候，系统立马去通知 对应处理的函数叫做钩子函数
 hooks 钩子函数  允许在特定的时期添加用户自己的代码  不同的阶段添加自己的逻辑代码

 react 组件的生命周期 分为三个阶段
 1.mount  组件的初始化  从虚拟DOM 渲染成为真实DOM 的过程   1
 2.update   组件的数据变化   组件的state 更新 导致二次渲染的过程   n
 3.unmount  组件销毁   组件因为路由切换而销毁 (浏览器的垃圾回收机制 )     1

 mounted 组件载入阶段  (钩子函数)
 1.getDefaultProps   设置组件默认的props   废弃
 2.getInitialState   设置组件默认的state   废弃
 3.componentWillMount  在jsx被渲染到页面之前被调用
 4.render   渲染函数是react中默认的函数
 5.componentDidMount   jsx被渲染到页面后被调用

*/
let count = 0
export default class Lifedemo extends Component {
    log(msg) {
        console.log(`------${++count}-------${msg}`)
    }



    componentWillMount() {  //虚拟dom   写接口  打印日志
        console.log(this.refs.one)
        this.log("componentWillMount  虚拟dom   ")
    }


    render() {
        this.log("render  虚拟dom 正在渲染  ")
        return (
            <div>
                <p ref="one">123</p>
                <hr />
                <Child />
            </div>

        )
    }


    componentDidMount() {  //真实dom   进行实例化
        console.log(this.refs.one)
        this.log("componentDidMount 渲染成功  真实dom")
        this.refs.one.style.color = "red"
    }
}



/*
update 组件数据更新阶段   组件修改 state  组件接收的props发送改变  都会进入 update 阶段 
1. componentWillReceiveProps(nextProps)  接收变化的props
2. shouldComponentUpdate  询问是否更新  true 更新 false 不更新 
3. componentWillUpdate   组件即将更新  
4. render   组件开始二次渲染  update
5. componentDidUpdate   组件更新渲染数据完毕 

*/


class Child extends Component {
    state = {
        disabled: true,
    }

    check = () => {
        var usertel = this.refs.username.value
        var userpwd = this.refs.userpwd.value
        console.log(this.refs.username.value)
        console.log(this.refs.userpwd.value)
        var usertelReg =  /^1(3|5|7|8|9)\d{9}$/ 
        var userpwdReg =  new RegExp("^[a-zA-Z0-9]{6,12}$");
        this.setState({
            disabled:!(usertelReg.test(usertel)&&userpwdReg.test(userpwd))
        })
        // if (usertelReg.test(usertel)&&userpwdReg.test(userpwd)) {
        //     console.log("666")
        //     this.setState({
        //         disabled: false
        //     })
        // } else {
        //     console.log("777")
        //     this.setState({
        //         disabled: true
        //     })
        // }
    }

    render() {

        return (
            <div>
                <p>请输入电话号码<input type="text" ref="username" onChange={this.check} /></p>
                <p>请输入密码<input type="password" ref="userpwd" onChange={this.check} /></p>
                <button disabled={this.state.disabled}>登录</button>

            </div>
        )
    }


}














/*
 react 组件的生命周期
 含义   组件从初始化渲染到被移除或者销毁的过程  成为组件的生命周期

 1. 每个组件都有生命周期
 2. react 通过组件的生命周期钩子函数来管理 组件
 3. 系统 某些状态和参数发生改变的时候，系统立马去通知 对应处理的函数叫做钩子函数
 hooks 钩子函数  允许在特定的时期添加用户自己的代码  不同的阶段添加自己的逻辑代码

 react 组件的生命周期 分为三个阶段 
 1.mount  组件的初始化  从虚拟DOM 渲染成为真实DOM 的过程   1
 2.update   组件的数据变化   组件的state 更新 导致二次渲染的过程   n   
 3.unmount  组件销毁   组件因为路由切换而销毁 (浏览器的垃圾回收机制 )     1  

 mounted 组件载入阶段  (钩子函数)
 1.getDefaultProps   设置组件默认的props   废弃
 2.getInitialState   设置组件默认的state   废弃
 3.componentWillMount  在jsx被渲染到页面之前被调用
 4.render   渲染函数是react中默认的函数
 5.componentDidMount   jsx被渲染到页面后被调用

*/ 

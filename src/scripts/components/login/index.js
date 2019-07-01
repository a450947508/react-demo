


import { WingBlank, WhiteSpace, SearchBar, List, InputItem, Button, } from "antd-mobile";
import axios from "@/utils/axios"
import { PropTypes } from "prop-types"
import "./index.scss";
import { Header } from '../header'


import loginbeijingtu from "../../../assets/images/login1.jpg"
import loginbeijingtu2 from "../../../assets/images/login2.jpg"



var beijingtu = {
    backgroundImage: `url(${loginbeijingtu})`,
    width: "100%",
    height: "50%",
}

export const usertel = /^1(3|5|7|8|9)\d{9}$/
export const userpwd = /^\d{4}$/

var timer = null;
// var auths = null;
// document.addEventListener("plusready", plusReady, false);
// function plusReady() {
//     // 			getNetWork( 
//     getAuthServices()
// }
// // 获取第三方登录的服务列表 
// function getAuthServices() {
//     plus.oauth.getServices((services) => {
//         auths = services;
//         console.log(JSON.stringify(auths));
//     }, (e) => {
//         plus.nativeUI.alert("获取登录授权服务列表失败：" + JSON.stringify(e));
//     })
// }



export class MyLogin extends Component {
    state = {
        tel: true,
        pwd: true,
        flag: true,
        count: 60,
        txt: "获取验证码",
        icon: "icon-minefill",
        qq: 'qq',
        weibo: 'sinaweibo',
        weixin: 'weixin'

    }

    // authLogin = (id) => {
    //     var that = this;
    //     for (var s in auths) {
    //         if (auths[s].id == id) {
    //             var obj = auths[s];
    //             obj.login(function (e) {
    //                 plus.nativeUI.alert("登录认证成功!");
    //                 obj.getUserInfo(function (e) {
    //                     window.localStorage.setItem("username", obj.userInfo.nickname)
    //                     that.context.props.history.push("/myapp/home")
    //                 }, function (e) {
    //                     plus.nativeUI.alert("获取用户信息失败： " + JSON.stringify(e));
    //                 });
    //             }, function (e) {
    //                 plus.nativeUI.alert("登录认证失败: " + JSON.stringify(e));
    //             });
    //         }
    //     }
    // }

    gotoQQ = (id) => {
        this.authLogin(id)
    }

    gotoWeibo = (id) => {
        this.authLogin(id)
    }

    gotoWeixin = (id) => {
        this.authLogin(id)
    }




    startTime = () => {

        timer = setInterval(() => {
            if (this.state.count > 0) {
                this.setState({
                    count: --this.state.count,
                    txt: this.state.count + ' s 后继续'
                })

            } else {
                clearInterval(timer);
                timer = null;
                this.setState({
                    txt: "获取验证码",
                    tel: false,
                    flag: true,
                    count: 60
                })
            }
        }, 1000)
    }


    getcodes = () => {
        // console.log("666")
        axios.post("/react/sendCode", {
            mobile: this.refs.mobile.state.value
        }).then(res => {

            console.log(res)
        })

        this.setState({
            tel: true,
            flag: false
        })

        this.startTime()

    }

    getlogin = () => {
        console.log(this.refs.code.state.value)
        axios.post("/react/testCode", {
            code: this.refs.code.state.value,
            mobile: this.refs.mobile.state.value
        }).then(res => {
            console.log(res.data.type)
            if (!!res.data.type) {
                this.context.props.history.push("/myapp/home")

                sessionStorage.token = JSON.stringify(res.data.token)
            } else {
                delete sessionStorage['token']
            }
        })

        window.localStorage.setItem("username", this.refs.mobile.state.value)
    }



    checktel = (val) => {

        if (usertel.test(val)) {
            this.setState({
                tel: false
            })
        } else {
            this.setState({
                tel: true
            })
        }
    }

    checkpwd = (val) => {
        if (userpwd.test(val)) {
            this.setState({
                pwd: false
            })
        } else {
            this.setState({
                pwd: true
            })
        }
    }
    goback = () => {
        history.go(-1)
    }

    render() {
        const {
            tel,
            pwd,
            txt,
            icon,
            qq,
            weibo,
            weixin
        } = this.state

        return (
            
                <div style={beijingtu} >

                    <i className={'houtui iconfont  iconhoutui'}
                        onClick={this.goback}
                    ></i>
                    
                 <Header data="登录" />  
                    <WingBlank>
                        <div className="touxiang">
                            <i><img src={loginbeijingtu2} alt="" /></i>
                        </div>

                        <List>

                            <InputItem
                                type="tel"
                                placeholder="请输入手机号"
                                clear
                                onChange={this.checktel}
                                ref="mobile"

                            >
                                {/* <i className={"iconfont icon-minefill"}></i>
                             */}
                            </InputItem>



                            <InputItem
                                type="tel"
                                placeholder="请输入四位数验证码"

                                ref="code"
                                onChange={this.checkpwd}
                            >
                                {/* <i className={"iconfont iconmima2"}></i> */}
                            </InputItem>
                            <WhiteSpace />
                        </List>
                        <WhiteSpace />
                        <Button className="l-btn" ref="btn" type="warning" onClick={this.getcodes}
                            disabled={tel}
                        > {txt}</Button>

                        <WhiteSpace />
                        <Button type="primary" onClick={this.getlogin}
                            disabled={pwd}
                        >马上登录</Button>

                        <ul className="loginbottom">
                            <li className="loginbottom-top">
                                <div className="line"></div>
                                <span className="party">第三方登录</span>
                                <div className="line"></div>
                            </li>

                            <li className="loginli" align="center" onClick={() => this.gotoQQ(qq)}>
                                <img src={require("../../../assets/images/qq.png")} alt="" />
                            </li>
                            <li className="loginli" onClick={() => this.gotoWeibo(weibo)}>
                                <img src={require("../../../assets/images/weibo.png")} alt="" />
                            </li>
                            <li className="loginli" onClick={() => this.gotoWeixin(weixin)}>
                                <img src={require("../../../assets/images/weixin.png")} alt="" />
                            </li>
                        </ul>

                    </WingBlank>

                </div>
   

        )
    }
    // 组件移除消除计时器 
    componentWillUnmount() {
        clearInterval(timer);
    }
}



MyLogin.contextTypes = {
    props: PropTypes.object

}
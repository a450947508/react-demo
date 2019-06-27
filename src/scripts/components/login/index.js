


import { WingBlank, WhiteSpace, SearchBar, List, InputItem, Button, } from "antd-mobile";
import axios from "@/utils/axios"
import { PropTypes } from "prop-types"
import "./index.scss";

import loginbeijingtu from "../../../assets/images/login1.jpg"
import loginbeijingtu2 from "../../../assets/images/login2.jpg"



var beijingtu = {
    backgroundImage: `url(${loginbeijingtu})`,
    width: "100%",
}




export const usertel = /^1(3|5|7|8|9)\d{9}$/
export const userpwd = /^\d{4}$/

var timer = null;

export class Login extends Component {
    state = {
        tel: true,
        pwd: true,
        flag: true,
        count: 60,
        txt: "获取验证码",
        icon: "icon-minefill",
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
                var userinfo = {
                    token: res.data.token
                }
                sessionStorage.userinfo = JSON.stringify(userinfo)
            } else {
                delete sessionStorage['userInfo']
            }
        })
    }



    checktel = (qqq) => {

        if (usertel.test(qqq)) {
            this.setState({
                tel: false
            })
        } else {
            this.setState({
                tel: true
            })
        }
    }

    checkpwd = (qq) => {
        if (userpwd.test(qq)) {
            this.setState({
                pwd: false
            })
        } else {
            this.setState({
                pwd: true
            })
        }
    }


    render() {
        const {
            tel,
            pwd,
            txt,
            icon
        } = this.state
        return (
            <div style={beijingtu} >

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
                            <i className={"iconfont icon-minefill"}></i>
                        </InputItem>



                        <InputItem
                            type="tel"
                            placeholder="请输入四位数验证码"

                            ref="code"
                            onChange={this.checkpwd}
                        >
                            <i className={"iconfont iconmima1"}></i>
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
                        <li className="loginli" align="center">
                            <img src={require("../../../assets/images/qq.png")} alt="" />
                        </li>
                        <li className="loginli">
                            <img src={require("../../../assets/images/weibo.png")} alt="" />
                        </li>
                        <li className="loginli">
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



Login.contextTypes = {
    props: PropTypes.object

}
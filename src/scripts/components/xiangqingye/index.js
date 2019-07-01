
import { Modal } from 'antd-mobile';

import axios from "@/utils/axios"
import "./index.scss"
import { PropTypes } from "prop-types"

import { Link } from "react-router-dom"


import { setItem } from '@/redux/actions'
import store from '../../../redux/store'
import history from '@/utils/history'



let token = sessionStorage.getItem("token")

const alert = Modal.alert;


export class Xiangqingye extends Component {
    state = {
        goods: [],
        dianzanflag: true,
        guanzhuflag: true,
        shoucangflag: true
    }

    componentWillMount() {

        let id = this.props.location.search.split("=")[1];

        axios.get("/react/xiangqingye", {
            params: {
                id
            }
        }).then(res => {
            this.setState({
                goods: res.data.result[0]

            })

        })
    }

    goback = () => {
        history.go(-1)
    }

    gotoCollect = (goods) => {
        var loginName = window.localStorage.getItem("username");


        if (loginName) {

            axios.post("/react/addmycart", {
                token: sessionStorage.getItem("token"),
                goodId: JSON.stringify(goods._id),
                goods: goods
            }).then(res => {

            })


            alert('提示', '加入成功,是否进入菜篮子???', [
                {
                    text: '否', onPress: () => {

                    }
                },
                {
                    text: '是', onPress: () => {
                        history.push('/myapp/cart')
                    }
                },
            ])
        } else {
            
            alert('提示', '还未登录是否立即登录', [
                {
                    text: '否', onPress: () => {

                    }
                },
                {
                    text: '是', onPress: () => {
                        history.push('/login')
                    }
                },
            ])
        }





    }

    dianzan = (dianzanflag) => {
        console.log(dianzanflag)
        this.setState({
            dianzanflag: !dianzanflag
        })
    }
    guanzhuflag = (guanzhuflag) => {
        this.setState({
            guanzhuflag: !guanzhuflag
        })
    }
    shoucang = (shoucangflag) => {
        this.setState({
            shoucangflag: !shoucangflag
        })
    }




    render() {
        const {
            history
        } = this.context.props

        const {
            goods,
            dianzanflag,
            guanzhuflag,
            shoucangflag
        } = this.state


        return (
            <div className="xiangqing">
                <div style={{ marginBottom: 50 }}>
                    <i className={'houtui iconfont  iconhoutui'}
                        onClick={this.goback}
                    ></i>
                    <img className="xiangqingimg" src={goods.img1} alt="" />
                    <h2>{goods.title}</h2>
                    <p className='love'>{goods.love}人收藏
                    <span onClick={() => this.shoucang(shoucangflag)}
                            style={{ color: this.state.shoucangflag ? "" : 'orange' }}
                        >
                            {this.state.shoucangflag ? "收藏" : '取消收藏'}
                        </span></p>
                    <p className="need">需要的食材<span onClick={() => this.gotoCollect(goods)} >加入菜篮子</span></p>
                    <p className='needfood'> {goods.food}</p>
                    <h2>烹饪步骤</h2>
                    <p className='text'>{goods.text}</p>

                </div>

                <div className='footercontent'>
                    <span onClick={() => this.dianzan(dianzanflag)}
                        style={{ color: this.state.dianzanflag ? "" : 'orange' }}
                        className={'dianzan iconfont  iconzan_weidian'}>
                        {this.state.dianzanflag ? "点赞" : '取消点赞'}
                    </span>
                    <span
                        className={'pinglun iconfont  iconpinglun'}>&nbsp;评论</span>

                    <span onClick={() => this.guanzhuflag(guanzhuflag)}
                        style={{ color: this.state.guanzhuflag ? "" : 'orange' }}
                        className={'shoucang iconfont  iconshoucangchangtai'}>
                        {this.state.guanzhuflag ? "关注" : '取消关注'}
                    </span>

                </div>
            </div>
        )
    }
}


Xiangqingye.contextTypes = {
    props: PropTypes.object

}
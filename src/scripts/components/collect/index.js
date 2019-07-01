
import { Header } from '../header'
import { PropTypes } from "prop-types"
import axios from "@/utils/axios"
import { Link } from "react-router-dom"
import { Modal } from 'antd-mobile';


import './index.scss'

import store from '../../../redux/store'



const alert = Modal.alert;
export class Collect extends Component {
    state = {
        goods: []
    }

    componentWillMount() {
        axios.post("/react/showmycar", {
            username: window.localStorage.getItem("username")
        }).then(res => {
            this.setState({
                goods: res.data.result
            })
        })

    }



    delGoods = (goods) => {
        alert('提示', '是否退出登录???', [
            {
                text: '否', onPress: () => {

                }
            },
            {
                text: '是', onPress: () => {

                    console.log(goods)
                    axios.post("/react/delgoods", {
                        goodid: goods
                    }).then(res => {
                        axios.post("/react/showmycar", {
                            username: window.localStorage.getItem("username")
                        }).then(res => {
                            this.setState({
                                goods: res.data.result
                            })
                        })
                    })
                }
            },
        ])
    }









    render() {
        const {
            goods
        } = this.state
        console.log(goods)
        const {

        } = this.context.props


        return (
            <div>

                <div className='colContent' >
                    {
                        goods.map((l, i) => {
                            return (

                                <div className='colContentdiv' key={i}>
                                    <Link className='fenlei  jello' to={"/xiangqingye/detil/" + "?id=" + l.body.goods._id} >

                                        <img src={l.body.goods.img1} alt="" />
                                    </Link>
                                    <h2>{l.body.goods.title}</h2>
                                    <h2>菜谱:</h2>

                                    <span onClick={() => this.delGoods(l._id)}>移除这个菜</span>
                                    <p>{l.body.goods.food}</p>
                                </div>


                            )
                        })
                    }
                </div>
            </div>
        )
    }




}


Collect.contextTypes = {
    props: PropTypes.object

}
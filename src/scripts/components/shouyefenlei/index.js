



import "./index.scss"

import Swipe from "../swipe"

import store from '../../../redux/store'


import homeimg from '../../../assets/images/homeimg.png'

import {Shouyelist} from "../shouyelist"
import history from '@/utils/history'


var list = [
    { icon: "iconcaipu", color: 'orange', title: '热门菜谱', },
    { icon: "iconshipin", color: '#ff7e00', title: '美食视频' },
    { icon: "iconqiandao", color: '#5898f0', title: '我的收藏' },
    { icon: "iconshoucang", color: '#f4ea2a', title: '每日签到' },
]
 


export class Shouyefenlei extends Component {


    goxiangqing=()=>{
        history.push("/myapp/classify")
    }

    render() {
        const {
            swipe1:{
                swipe1
            },
            swipe2:{
                swipe2
            }
        } = store.getState()
      
        return (
            <div className='shouyefenlei'>
                <ul className="homeul">
                    {
                        list.map((item, i) => {
                            return (

                                <li  style={{ color: item.color }}
                                    key={i}
                                >
                                    <i className={" shouyetubiao  iconfont icon  " + item.icon }></i>
                                    <p>{item.title}</p>
                                </li>

                            )
                        })
                    }
                </ul>
                <div className="homendaohang">
                    <h2>家常菜 <span  onClick={this.goxiangqing}>更多<i className={"iconfont  icon  iconyoujiantou"}></i></span>
                    </h2>
                    <Swipe data={swipe1} />
                    <div className="homeimg">
                        <img src={homeimg} alt=""/>
                        <h3>今天吃什么?</h3>
                    </div>
                    <h2>早餐 <span  onClick={this.goxiangqing}>更多<i className={"iconfont  icon  iconyoujiantou"}></i></span>
                    </h2>
                    <Swipe data={swipe2}/>
                    <h2>菜谱推荐 <span  onClick={this.goxiangqing}>更多<i className={"iconfont  icon  iconyoujiantou"}></i></span>
                    </h2>
                    <Shouyelist/>
                </div>
               
            </div>
        )
    }
}

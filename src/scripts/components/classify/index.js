
import { Tabs, WhiteSpace, Badge, List } from 'antd-mobile';
import axios from '@/utils/axios.js'

import { Link } from "react-router-dom"

import "./index.scss";





export class Classifycontent extends Component {
    state = {
        list: [],
        goods: []
    }


    componentWillMount() {
        axios.get("react/fenleilisttype")
            .then(res => {
                this.setState({
                    list: res.data.result
                })

            })

        axios.get("react/fenleilist")
            .then(res => {
                this.setState({
                    goods: res.data.result
                })

            })
    }


    renderContent = newTabs =>
        <ul style={{ paddingBottom: "2rem", backgroundColor: '#fff' }}>
            {
                this.state.goods.filter((g) => g.type == newTabs.title).map((item, i) => {
                    return (
                        <Link className='fenlei' to={"/xiangqingye/detil/" + "?id=" + item._id} key={i} >
                            <li className="li cl"    >
                                <img className="zoomIn" src={item.img1} alt="" />
                                <div className="div">
                                    <h2 className="cl">{item.title}</h2>
                                    <p className="p1">烹饪需要{item.time}</p>

                                    <p className="p3">
                                        <span className="span1">{item.love}人收藏</span>

                                    </p>
                                </div>
                            </li>
                        </Link>
                    )
                })
            }
        </ul>


    render() {

        // const {
        //     list: [],
        //     goods: []
        // } = this.props


        const {
            list,
            goods
        } = this.state

        console.log(this.state.goods)

        // let tabs = list.map((item) => {
        //     item.title = item;
        //     return item;
        // })

        let tabs = [];
        list.map((item, i) => {
            var obj = {};
            obj.title = item;
            tabs.push(obj)

        })


        return (
            <div>

                <Tabs tabs={tabs}
                    initialPage={0}
                    tabBarActiveTextColor="orange"
                    tabBarUnderlineStyle={{ borderColor: "orange" }}

                >
                    {this.renderContent}
                </Tabs>


            </div>
        )
    }
}
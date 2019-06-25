
import { NavLink } from "react-router-dom"
import {Badge} from "antd-mobile"
import  './index.scss'

export const foots = [
    { txt: "首页", path: "/myapp/home", name: "home", icon: "icon-home" },
    { txt: "分类", path: "/myapp/classify", name: "classify", icon: "icon-goodsfill" },
    { txt: "购物车", path: "/myapp/cart", name: "cart", icon: "icon-shop_car" },
    { txt: "我", path: "/myapp/my", name: "my", icon: "icon-minefill" }
]


export class Footer extends Component {

    render() {
        return (
            <footer>
                {
                    foots.map((index, i) => {
                        return (
                            <div key={i}>
                                <NavLink to={index.path}
                                    activeClassName="nav-active"
                                >
                                    <i className={"iconfont icon " + index.icon} ></i>

                                    <span>{index.txt}</span>

                                    {i == 2 && <Badge className="hot" text={8} style={{ marginLeft: 12 }}>

                                    </Badge>}


                                </NavLink>
                            </div>
                        )
                    })
                }
            </footer>
        )
    }


}
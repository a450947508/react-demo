
import { NavLink } from 'react-router-dom'
import { Badge } from "antd-mobile"

import { Footer } from "../../components/footer";
import { Search } from "../../components/search";
import { Shouyefenlei } from "../../components/shouyefenlei";

import { ReduxDemo } from "../store/index.js"




export class Home extends Component { 
    render() {
        return (
            <div style={{backgroundColor:"#fff" }}>
                <Search />
                <Shouyefenlei/>
                <Footer />
            </div>
        )
    }
}



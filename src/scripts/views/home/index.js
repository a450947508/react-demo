
import { NavLink } from 'react-router-dom'
import { Badge,SearchBar } from "antd-mobile"

import { Footer } from "../../components/footer";
// import { Search } from "../../components/search";
import { Shouyefenlei } from "../../components/shouyefenlei";
import { Header } from "../../components/header";

import { ReduxDemo } from "../store/index.js"




export class Home extends Component { 
    render() {
        return (
            <div style={{backgroundColor:"#fff" }}>
               <Header
               data="首页" 
               />
        
                <Shouyefenlei/>
                <Footer />
            </div>
        )
    }
}



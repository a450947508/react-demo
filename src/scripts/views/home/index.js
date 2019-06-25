
import { Route, Link, Switch } from 'react-router-dom'


import { Footer } from "../../components/footer";
import {ReduxDemo}  from "../store/index.js"


export class Home extends Component {
    render() {
        return (
            <div>
                <p> home home  首页</p>
               
                <Footer/>
            </div>
    

        )
    }
}



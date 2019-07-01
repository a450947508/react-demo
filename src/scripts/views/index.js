

import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom"


import { MyApp } from './app'
import { ReduxDemo } from './store/index'
import { PropTypes } from "prop-types";
import { Login } from '@/scripts/components/login'
import { Xiangqingye } from '@/scripts/components/xiangqingye'
import { Search } from '@/scripts/components/search'
import { MyLogin } from '../components/login'

export class IndexView extends Component {
    render() {
        return (
            <Router>
                <div id="main">

                    <Route path="" component={Layout} />

                </div>
            </Router>
        )
    }
}

// 路由配置  
export class Layout extends Component {
    getChildContext(){     
        return {
            props:this.props
        }
    }
    render() {
        return (  
                <Switch>
                    <Route path="/myapp" strtic component={MyApp} />
                    <Route path="/redux" exact component={ReduxDemo} />
                    <Route path="/xiangqingye/:id" exact  component={Xiangqingye} />
                    <Route path="/search"   component={Search} />
                    <Route path="/login"   component={MyLogin} />
                    <Route render={() => (<Redirect to="/myapp/home" />)} />
                </Switch>
           

        )
    }
}



Layout.childContextTypes = {
    props:PropTypes.object
}

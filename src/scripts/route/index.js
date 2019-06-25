

import { HashRouter as Router, BrowserRouter, Switch, Route, Link,Redirect } from 'react-router-dom'


class Home extends Component {
    render() {
        console.log(this.props)

        return (
            <div>
                <p>这是 home-----home</p>
                <p>username===={this.props.match.params.username}</p>
                <p>userage======{ new URLSearchParams(this.props.location.search).get('userage')}</p>
            </div>
        )
    }
}

class Find extends Component {
    render() {
        return (
            <div>
                <p>这是  Find</p>
            </div>
        )
    }
}


class Mine extends Component {
    render() {
        return (
            <div>
                <p>这是个人中心 Mine   </p>

            </div>
        )
    }
}


class Layout extends Component {
    render() {
        return (
            <div>
                <p>这是路由的主视图</p>
                <div>
                    <Link to="/home/58/laowang?userage=16">首页</Link>
                    <Link to="/mine">个人中心</Link>
                    <Link to="/find/14/weier">发现</Link>
                </div>
                <hr />
                <div>
                    <Switch>
                        <Route path="/home/:id/:username" exact component={Home} />
                        <Route path="/mine" component={Mine} />
                        <Route path="/find/:id/:username?" component={Find} />
                        {/* <Route path="/"  render={()=>(<Redirect to="/home"/>)}/> */}
                    </Switch>
                </div>
            </div>
        )
    }
}

// export class xxxx extends Component{
//     render(){
//         return(
//             <div>
//                 <Redirect to="/home"/>
//             </div>
//         )
//     }
// }




const App = () => (
    <div>
        <h2>这是 react   router-dom v4  app</h2>
        <hr />
        <Layout />
    </div>
)

export default class IndexRouter extends Component {
    render() {
        return (
            <Router
                basename="/"  // 上线 路径改变  才需要改写
            >
                <div>
                    <p>router ---router</p>
                    <App></App>

                </div>
            </Router>
        )
    }
}
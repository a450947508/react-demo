
import {HashRouter as Router,Route,Switch,Redirect} from "react-router-dom"

import {Home} from '../home'
import {Classify} from '../classify'
import {Cart} from '../cart'
import {My} from '../my'




export class MyApp extends Component {

 

    render() {
        return (
            <div>
            
                <div>           
                    <Switch>
                        <Route path="/myapp/home"    component={Home} />
                        <Route path="/myapp/classify" component={Classify} />
                        <Route path="/myapp/cart" component={Cart} />
                        <Route path="/myapp/my" component={My} />                     
                   
                    </Switch>                
                </div>
            </div>
        )
    }
}

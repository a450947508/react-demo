

import PropTypes from "prop-types"

export default class   ContextDemo extends Component{

    getChildContext(){
        return{
            word:"为儿牛逼"
        }
    }

    render(){
        return(
            <div>
                <A/>
            </div>
        )
    }
}

ContextDemo.childContextTypes = {
   
    word:PropTypes.string
}

ContextDemo.propTypes={
    word:PropTypes.string
}







class A extends Component{
    render(){
        return(
            <div>
                <p> 我是 A组件</p>
                <hr/>
                <B/>
            </div>
        )
    }
}


class B extends Component{
    render(){
        return(
            <div>
                 <p> 我是 B组件</p>
                 <hr/>
                 <C/>
            </div>
        )
    }
}


class C extends Component{
    render(){
        return(
            <div>
                <p> 我是 C组件</p> 
                <p>{this.context.word}</p>
                <hr/>
                <D/>
            </div>
        )
    }
}

C.contextTypes={
    word:PropTypes.string
}






class D extends Component{
 
    render(){
        console.log(this)
        return(
            <div>
                 <p> 我是 D组件</p>
                 <p>word===={this.context.word}</p>
            </div>
        )
    }
}

D.contextTypes={
    word:PropTypes.string
}
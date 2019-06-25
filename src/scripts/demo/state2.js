



export default class state2 extends Component {

    state = {
        word: '我是隔壁老王',
        num: '8888',
        show:true
    }

    getval=(e)=>{
        console.log(this.refs.one)
        this.setState({
            word:e.target.value
        })
    }
    setshow=()=>{
        this.setState({
            show:!this.state.show
        })
    }
    setrefs=()=>{
        console.log(this.refs)
        this.refs.child.onchangecount(10)
    }
    render() {
        const {
            word,
            num,
            show
        } = this.state

     
        return (
            <div>
                <p>父子通信</p>
                <p>word===={word}</p>
                <p>num======{num}</p>
                <button onClick={this.setshow}>123</button>
                <button onClick={this.setrefs}> 通过refs  修改子组件</button>
                <hr />
                
                <p><input onChange={this.getval} ref="one" value={word} type="text"/></p>
                <Child word={word}  show={show}  ref="child"/>
                
            </div>
        )
    }
}


class Child extends Component {
    
    state={
        count:888
    }

    onchangecount=(i)=>{
        this.state.count+=i
        this.setState({
            count:this.state.count
        })
    }
      

    render() {
        const{
            word,
            show,
            
        }= this.props

        return (
            <div>
                <h2>
                    child ---child
                </h2>
                <p
                style={{background:'red',width:150,height:150,display:show?'block':'none'}}
                >{word}</p>
                <p>count======{this.state.count}</p>
            </div>
        )
    }
}




/*
 组件之间的通信 
 
 1. 父子 组件 
 <A>
    <B></B>
 </A>
 2. 兄弟组件 
 <A></A><B></B>

 props 传递数据
 state 修改数据 

 父组件如何修改子组件

 父组件把组件的state 当着子组件的props 传递给子组件
 父组件修改 state 会二次render 子组件接收到变化的 props  从而实现子组件修改  

 ref   this.refs  对象获取
 1. ref 作用于DOM 元素  指向这个真实的DOM元素
 2. ref 作用于组件  指向这个组件对象   

*/ 
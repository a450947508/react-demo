



export default class Props2 extends Component {
    state = {
        show: true,
        word: '阿伟死了'
    }
    getchange = () => {
        this.setState({
            show: !this.state.show
        })
    }

    getinput = (word) => {
        this.setState({
            word
        })
    }
    render() {

        const {
            show,
            word
        } = this.state


        return (
            <div>
                <h2>  子修改父 通过ref</h2>
                <div style={{ backgroundColor: 'red', width: 100, height: 100, display: show ? "block" : "none" }}>1111</div>
                <p>word ======{word}</p>
                <hr />
                <Child ref="one" getchange={this.getchange} word={word}  getinput={this.getinput}/>
            </div>
        )
    }
}






class Child extends Component {


    changeshow = () => {
        console.log(this.props)
        this.props.getchange()
    }

    setinput = () => {
       this.props.getinput(this.refs.two.value)
    }
    render() {
        // console.log(this.props)
        const {
            word,
        } = this.props
        return (
            <div>
                <h2> 我是子组件  </h2>
                <button onClick={this.changeshow}>点击改变父组件</button>
                <p><input ref="two" type="text" value={word} onChange={this.setinput} /></p>
            </div>
        )
    }
}
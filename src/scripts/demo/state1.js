


let timer = null
export default class State1 extends Component {
    //方法 1
    // constructor(){
    //     super(); //继承父类
    //     this.state={
    //         counts:1901
    //     }
    // }
    //方法2
    state = {
        word: "两周拿offer",
        counts: 1901,
        num: 0
    }

    countadd = () => {
        this.setState({
            counts: ++this.state.counts
        })
    }
    go = () => {
        if (!timer) {
            timer = setInterval(() => {
                this.setState({
                    num: ++this.state.num
                })
            }, 1000);
        }
    }
    stop() {
        clearInterval(timer),
        timer=null
    }

    render() {
        console.log(this)
        const {
            counts,
            word,
            num
        } = this.state

        return (
            <div>
                <p> react  state  状态</p>
                <h2 onClick={this.countadd}>{counts}</h2>
                <p>num===={num}</p>
                <button onClick={this.go}>开始计数</button>
                <button onClick={this.stop}>暂停计数</button>
            </div>
        )
    }
}







/*
  state 状态 react 组件数据交互的载体  状态用来修改的  类似vue 的data

  1. state 不能在组件外部定义  不能在组件外部 修改  只能在组件内部定义声明 只能在内部修改
  2. state 用来被修改的  this.state 获取 state, this.setState() 来修改 state
  3. state 在组件内部的 getInitialState 来初始化定义 state ,必须返回一个对象,废弃了
  4. state 修改 setState 这个方法会修改 state 会重新执行 组件内部的 render方法 , 会触发页面的
  二次渲染  虚拟DOM 会根据react 的 diff  算法  得到新的虚拟DOM 最后的批量的更新

*/







import PropTypes from "prop-types";

export default class Prop1 extends Component {
    state = {
        massage: this.props.msg
    }


    prop1 = () => {
        console.log(this.props)
    }
    render() {
        
        const {
            arr,
            msg,
            names
        }=this.props


        return (
            <div>

                <h2 onClick={this.prop1}>porps 组件交互</h2>
                {
                    arr.map((item, index) => {
                        return (
                            <p key={index}>{item}----{index}</p>
                        )
                    })
                }
            </div>
        )
    }
}


Prop1.propTypes={
    arr:PropTypes.array
}



// props  属性  父组件给 子组件 传递 的数据 


/*
1. react 数据传递载体  props 属性  state 状态  组件之间数据交互

2. props
a.  props 默认从组件外部（父组件）传入,props 也能在组件内部初始化定义 getDefaultProps
b.  组件内部 通过生命周期钩子函数 getDefaultProps (已废弃 )   App.defaultProps = {}
c.  props 一般不允许被修改   props 只用来传递数据
d.  props 接收  对象 常量 函数  数组
e.  props 在组件内部 通过 this.props 来获取  key-value
*/

    // PropTypes  校验Props 
    // optionalArray: PropTypes.array,
    // optionalBool: PropTypes.bool,
    // optionalFunc: PropTypes.func,
    // optionalNumber: PropTypes.number,
    // optionalObject: PropTypes.object,
    // optionalString: PropTypes.string,
    // optionalSymbol: PropTypes.symbol,

    // 校验 props 接收正确的格式类型的数据 
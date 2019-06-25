
import { Route, Switch } from 'react-router-dom'
import store from '../../../redux/store'
import { Button } from "antd-mobile"

import { countadd, countdesc, changeout, changeinput, clickshuju } from '@/redux/actions'


export class ReduxDemo extends Component {

    render() {
        console.log(store.getState())
        const {
            count,
            city,
            word,
            qqq

        } = store.getState()
        return (
            <div>
                <p>redux redux </p>
                <div>
                    <p>count====={count}</p>
                    <p>city======={city}</p>
                    <p>word======={word}</p>

                    {
                        qqq.mv.map((m, i) => {
                            return (
                                <div key={i}>
                                    {m.title}
                                </div>
                            )
                        })
                    }
                    <div>
                        <p>110</p>
                    </div>
                    <hr />
                    <Button inline onClick={() => store.dispatch({ type: 'COUNTADD' })} type="primary" >点击count +++</Button>

                    <Button inline onClick={() => store.dispatch(countadd(20))} type="primary" >点击count +++ 20</Button>

                    <Button inline onClick={() => store.dispatch(countdesc(60))} type="primary" >点击count -60 </Button>

                    <Button inline onClick={() => store.dispatch(changeout("晚上网吧yiyeyou一夜游"))} type="primary" >点击网吧一夜游 </Button>


                    <Button inline onClick={() => store.dispatch(clickshuju())} type="primary" > 点击获取数据</Button>


                    <p><input type="text" ref="one" onChange={() => { store.dispatch(changeinput(this.refs.one.value)) }} /></p>
                </div>

            </div>
        )
    }
}





// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// );

// unsubscribe();

// State 发生变化，就自动执行这个函数


import store from '../../../redux/store'
import axios from "@/utils/axios"

import { getshouyelist, } from '@/redux/actions'


export class Shouyelist extends Component {

    componentWillMount() {
        console.log(store)
        store.dispatch(getshouyelist())


        // axios.get("react/shouyelist")
        //     .then(res => {
               
        //     })

    }

    render() {
        const {
            shouyelist
        } = store.getState()
        console.log(store.getState())
        return (
            <div>
                <ul>
                    {
                        shouyelist.list.map((l, i) => {
                            <li key={i}>
                                <img src={l.img} alt="" />
                                <h2>{l.title}</h2>
                                <p>{l.author}</p>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
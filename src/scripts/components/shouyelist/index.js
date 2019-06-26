
import store from '../../../redux/store'
import axios from "@/utils/axios"

import { getshouyelist, } from '@/redux/actions'

import './index.scss'



export class Shouyelist extends Component {
    // state = {
    //     list: []
    // }


    componentWillMount() {

        store.dispatch(getshouyelist())


        // axios.get("react/shouyelist")
        //     .then(res => {  
        //         this.setState({
        //         list:res.data.result
        //         })   

        //     })

    }

    render() {
        const {
            shouyelist
        } = store.getState()
      


        return (
         
                <ul className="shouyelistUl">
                    {
                        shouyelist.list.map((l, i) => {
                            return (
                                <li  key={i}>
                                    <img className='zoomIn' src={l.img} alt="" />
                                    <h2>{l.title}</h2>
                                    <p>{l.author}</p>
                                </li>
                            )
                        })
                    }
                </ul>
          
        )
    }

}
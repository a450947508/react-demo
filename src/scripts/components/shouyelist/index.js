
import store from '../../../redux/store'
import axios from "@/utils/axios"
import { Link } from "react-router-dom"
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
        console.log(shouyelist)


        return (
         
                <ul className="shouyelistUl">
                    {
                        shouyelist.list.map((l, i) => {
                            return (

                                <Link className='fenlei  jello' to={"/xiangqingye/detil/" + "?id=" + l._id}  key={i}>


                                <li  >
                                    <img className='zoomIn' src={l.img1} alt="" />
                                    <h2 className='sl'>{l.title}</h2>
                                    <p>{l.love}人收藏</p>
                                </li>
                                </Link>
                            )
                        })
                    }
                </ul>
          
        )
    }

}


import { Tabs, SearchBar } from 'antd-mobile';
import './index.scss'

import { Link } from "react-router-dom"
import axios from "@/utils/axios"

export class Search extends Component {

    state = {
        lists: []
    }

    goback = () => {

        history.go(-1)
    }
    getlist = () => {
     
        axios.get("react/getlist", {
            params: {
                keyword: this.refs.one.state.value
            }
        }).then(res => {
            this.setState({
                lists: res.data.result
            })
           
        })
        this.refs.one.state.value = ""
    }

    getlist1=()=>{
      
        axios.get("react/getlist", {
            params: {
                keyword: this.refs.two.innerHTML
            }
        }).then(res => {
            this.setState({
                lists: res.data.result
            })
            
        })
       
    }

    getlist2=()=>{
      
        axios.get("react/getlist", {
            params: {
                keyword: this.refs.three.innerHTML
            }
        }).then(res => {
            this.setState({
                lists: res.data.result
            })
            
        })
       
    }

    getlist3=()=>{
       
        axios.get("react/getlist", {
            params: {
                keyword: this.refs.four.innerHTML
            }
        }).then(res => {
            this.setState({
                lists: res.data.result
            })
            
        })
       
    }

    getlist4=()=>{
       
        axios.get("react/getlist", {
            params: {
                keyword: this.refs.five.innerHTML
            }
        }).then(res => {
            this.setState({
                lists: res.data.result
            })
            
        })
       
    }



    render() {
        const {
            lists
        } = this.state
        return (


            <div>
                {/* <SearchBar placeholder="搜索 菜谱/课程" ref={ref => this.autoFocusInst = ref} /> */}
                <SearchBar
                    placeholder="搜索 菜谱/课程"
                    onBlur={this.getlist}
                    onCancel={this.goback}
                    showCancelButton
                    ref="one"
                />
                <div className="tishi">
                    <span className="tishispan" ref="two" onClick={this.getlist1} data="沙拉">沙拉</span>
                     <span  className="tishispan" ref="three" onClick={this.getlist2}>蒲公英</span>
                     <span  className="tishispan" ref="four" onClick={this.getlist3}>饭</span>
                     <span  className="tishispan" ref="five" onClick={this.getlist4}>奶油</span>
                </div>
                <ul style={{ marginTop:50}}>
                    {
                        lists.map((item, i) => {
                            return (
                                <Link className='fenlei' to={"/xiangqingye/detil/" + "?id=" + item._id} key={i} >
                                    <li className="li"    >
                                        <img className="zoomIn" src={item.img1} alt="" />
                                        <div className="qqq">
                                            <h2 className="">{item.title}</h2>
                                            <p className="p1">烹饪需要{item.time}</p>

                                            <p className="p3">
                                                <span className="span1">{item.love}人收藏</span>

                                            </p>
                                        </div>
                                    </li>
                                </Link>
                            )
                        })
                    }
                </ul>

            </div >

        )
    }
}
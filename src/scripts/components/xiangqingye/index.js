
import axios from "@/utils/axios"
import "./index.scss"


export class Xiangqingye extends Component {
    state = {
        goods: []
    }

    componentWillMount() {
        console.log(this.props)
        let id = this.props.location.search.split("=")[1];
        console.log(id)
        axios.get("/react/xiangqingye", {
            params: {
                id
            }
        }).then(res => {
            this.setState({
                goods: res.data.result[0]

            })

        })
    }

    goback=()=>{
        history.go(-1)
    }

    render() {
        const {
            goods
        } = this.state
        console.log(goods)

        return (
            <div className="xiangqing">
                <div style={{marginBottom:50}}>
                    <i className={'houtui iconfont  iconhoutui'} 
                    onClick={this.goback}
                    ></i>
                    <img className="xiangqingimg" src={goods.img1} alt="" />
                    <h2>{goods.title}</h2>
                    <p className='love'>{goods.love}人收藏 <span>点击收藏</span></p>
                    <p className="need">需要的食材<span>加入菜篮子</span></p>
                    <p className='needfood'> {goods.food}</p>
                    <h2>烹饪步骤</h2>
                    <p className='text'>{goods.text}</p>
               
                </div>
              
              
                <div className='footercontent'>
                    <span className={'iconfont  iconzan_weidian'}>&nbsp;点赞</span>
                    <span className={'iconfont  iconpinglun'}>&nbsp;评论</span>
                    <span className={'iconfont  iconshoucangchangtai'}>&nbsp;收藏</span>
                </div>
            </div>
        )
    }
}
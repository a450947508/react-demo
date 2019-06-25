
import { Carousel, WingBlank } from 'antd-mobile';
import "./index.scss"



export default class Swipe extends Component {
   
    

    render() {
        const{
            data
        }=this.props


        return (

            <Carousel className="space-carousel"
                cellSpacing={5}
                slideWidth={0.8}
                autoplay
                infinite

                afterChange={index => this.setState({ slideIndex: index })}
            >

                {
                    data.map((itme, i) => {
                        return (
                            <a key={i}>
                                <img src={itme.img} alt="" />
                                <p
                                className="swipeuser"
                                >{itme.title} <span>{itme.author}</span></p>
                            </a>
                        )
                    })
                }

            </Carousel>


        )
    }

}



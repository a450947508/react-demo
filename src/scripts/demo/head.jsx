




export class Head extends React.Component {
    render() {
        return (
            <div>
                <h2>我是首页</h2>
            </div>
        )
    }
}

export class Foot extends React.Component{
    render(){
        return(
            <div>
               我是jio部 
            </div>
        )
    }
}

import  img from '@/assets/images/img1.jpg'

export class DemoIng extends React.Component{
    render(){
        return(
            <div>
                <img src={img}  alt=""/>
            </div>
        )
    }
}


  var  tltlediv  = '武汉1901'

export class  Tltle extends React.Component{
    render(){
        return(
            <div>
                {tltlediv }
            </div>
        )
    }
}

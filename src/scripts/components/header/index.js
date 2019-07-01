
import { NavBar, Icon } from 'antd-mobile';
import './index.scss'
import { PropTypes } from "prop-types"



export class Header extends Component{
    

    goback=()=>{
        history.go(-1)
    }

    gotosearch=()=>{
        const {history} =this.context.props
    history.push("/search")
    }

    render() {
        const{
            data
        }=this.props

        return (
            <div className='home'>
                <NavBar
                    mode="dark"
                    leftContent={<Icon type="left"  onClick={this.goback} />}  
                    style={{backgroundColor:"#fff",color:"#000"}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }}  onClick={this.gotosearch}
                        
                        />,
                      
                      ]}
                >{data}</NavBar>
            </div>
        )
    }
}




Header.contextTypes = {
    props: PropTypes.object

}
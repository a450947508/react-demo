
import { NavBar, Icon } from 'antd-mobile';





export class Header extends Component{

    goback=()=>{
        history.go(-1)
    }

    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    leftContent={<Icon type="left"  onClick={this.goback} />}  
                    style={{backgroundColor:"#091454"}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                      
                      ]}
                >登录/注册</NavBar>
            </div>
        )
    }
}



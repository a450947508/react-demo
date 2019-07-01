
import { Modal,SwipeAction, List, Button } from 'antd-mobile';
import history from '@/utils/history'


import "./index.scss"

import { Footer } from "../../components/footer";
import { Header } from "../../components/header";

import loginbeijingtu from '../../../assets/images/login.jpg'

import touxiang from '../../../assets/images/img4.jpg'


var beijingtu = {
  backgroundImage: `url(${loginbeijingtu})`,
  width: '100%',
  height: '63vw',
  display: ' block',
  backgroundSize: ' 100%',
  overflow: 'hidden',
}



const alert = Modal.alert;

export class My extends Component {
  state = {
    myname: ''
  }


  componentWillMount() {
    var loginName = window.localStorage.getItem("username");
    window.localStorage.setItem("backUrl", window.location.href);
    if (loginName) {
      this.setState({
        myname: loginName
      })
    } else {
      this.setState({
        myname: "点击登录"
      })
    }
  }





  gologin = () => {
    var loginName = window.localStorage.getItem("username");




    if (loginName) {
     
      alert('提示', '是否退出登录???', [
        { text: '否', onPress: () => {

        } },
        { text: '是', onPress: () => {
          window.localStorage.removeItem("username");
          this.setState({
            myname: "点击登录"
          })
        } },
      ])
     
     
    } else {
      this.setState({
        myname: "点击登录"
      })
      history.push('/login')

    }
  }


  render() {
    const {
      myname
    } = this.state
    return (
      <div>
        {/* <Header data='个人中心' /> */}

        <div
          style={beijingtu}
          className="user-poster">
          <div className="mytouxiang">
            <img src={touxiang} alt="" />
          </div>
          <p onClick={this.gologin} className="myname"> {myname}</p>
        </div>



        <List  >
          <SwipeAction
            style={{ backgroundColor: 'gray', marginTop: '100' }}
            autoClose
            right={[
              {
                style: { backgroundColor: '#ddd', color: 'white' },

              }
            ]}
            left={[
              {
                style: { backgroundColor: '#108ee9', color: 'white' },
              },
              {
                style: { backgroundColor: '#ddd', color: 'white' },
              },
            ]}
          >
            <List.Item
              onClick={this.gologin111}
              arrow="horizontal"

            >
              达人申请
      </List.Item>
          </SwipeAction>
          <SwipeAction
            style={{ backgroundColor: 'gray' }}
            autoClose
            left={[
              {
                style: { backgroundColor: '#108ee9', color: 'white' },
                onPress: () => console.log('cancel'),
              },

            ]}
          >
            <List.Item

              arrow="horizontal"
            >
              厨币商城
      </List.Item>
          </SwipeAction>
          <SwipeAction
            style={{ backgroundColor: 'gray' }}
            autoClose
            right={[
              {
                style: { backgroundColor: '#ddd', color: 'white' },
              },
              {
                style: { backgroundColor: '#F4333C', color: 'white' },
              },
            ]}

          >
            <List.Item
              arrow="horizontal"
            >
              任务奖励
      </List.Item>
          </SwipeAction>
          <SwipeAction
            style={{ backgroundColor: 'gray' }}
            autoClose
            right={[
              {
                style: { backgroundColor: '#ddd', color: 'white' },
              },
              {
                style: { backgroundColor: '#F4333C', color: 'white' },
              },
            ]}

          >
            <List.Item
              arrow="horizontal"
            >
              商城订单
      </List.Item>
          </SwipeAction>
          <SwipeAction
            style={{ backgroundColor: 'gray' }}
            autoClose
            right={[
              {
                style: { backgroundColor: '#ddd', color: 'white' },
              },
              {
                style: { backgroundColor: '#F4333C', color: 'white' },
              },
            ]}
          >
            <List.Item
              arrow="horizontal"
            >
            联系客服
      </List.Item>
          </SwipeAction>
        </List>

        <Footer />
      </div>
    )
  }
}

import history from '@/utils/history'
import { Modal } from 'antd-mobile';

import { Footer } from "../../components/footer";
import { Collect } from "../../components/collect";
import { Header } from "../../components/header";
const alert = Modal.alert;
export class Cart extends Component {

    componentWillMount() {

        var loginName = window.localStorage.getItem("username");
        if (loginName) {
            history.push('/myapp/cart')
        } else {
            alert('提示', '还未登录是否立即登录', [
                {
                    text: '否', onPress: () => {
                        history.push('/myapp/home')
                    }
                },
                {
                    text: '是', onPress: () => {
                        history.push('/login')
                    }
                },
            ])
        }

    }


    render() {
        return (
            <div>
                <Header data='菜篮子' />
                <Collect />
                <Footer />
            </div>
        )
    }
}
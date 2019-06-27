



import { Footer } from "../../components/footer";
import { Classifycontent } from '@/scripts/components/classify'
import { Header } from "@/scripts/components/header"
import { SearchBar } from 'antd-mobile';


export class Classify extends Component {
    render() {
        return (
            <div>
                <Header data="详情" />
                <Classifycontent />
                <Footer />
            </div>
        )
    }
}
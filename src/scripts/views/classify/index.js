



import { Footer } from "../../components/footer";
import {Classifycontent} from '@/scripts/components/classify'
import {Search} from "@/scripts/components/search"



export class Classify extends Component{
    render(){
        return(
            <div>
               <Search/>
                <Classifycontent/>
                <Footer/>
            </div>
        )
    }
}
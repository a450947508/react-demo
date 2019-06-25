

import { SearchBar } from 'antd-mobile';


export class Search extends Component{
    render(){
        return (
       
            <SearchBar placeholder="搜索 菜谱/课程" ref={ref => this.autoFocusInst = ref} />
           
        )
    }
}
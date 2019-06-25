

export default class Btns extends  Component{
    render(){

        const {
            title,
            style,
            txt,
            name
        } =this.props
        return(
           
                <button title={title} style={style} txt={txt} namen={name}>{txt}</button>
         
        )
    }
}   
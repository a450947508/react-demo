


// Action 是一个对象。其中的type属性是必须的

// Action 就是 View 发出的通知，表示 State 应该要发生变化

// 改变 State 的唯一办法，就是使用 Action。它会运送数据到 Store

// Action Creator  把 action 封装成一个函数 

// store.dispatch()是 View 发出 Action 的唯一方法。


export  const countadd =(num)=>{
    return{
        type:"countadd",
        num
    }

}



export const COUNTDESC="COUNTDESC";

export const countdesc=(num)=>{
    return{
        type :COUNTDESC,
        num
    }
}


export const CHANGEOUT="CHANGEOUT"
export const changeout=(str)=>{
    return{
        type:CHANGEOUT,
        str
    }
}


export const CHANGEINPUT="CHANGEINPUT"
export const changeinput=(val)=>{
    return {
        type:CHANGEINPUT,
        val

    }
}


export const SETITEM="SETITEM"
export const  setItem=(item)=>{
    return {
        type :SETITEM,
        item
    }
}




import axios from "@/utils/axios";


export const clickshuju=()=>{
    return  axios.get("/vue/movie")
    .then(res=>{
       return {
        type:"clickshuju",
        mv:res.data.result,         
       }
       console.log(res.data.result)
       console.log("666")
    })   
   
}


export const GEISHOUYELIST="GEISHOUYELIST"

export const getshouyelist=()=>{
    return axios.get("/react/shouyelist")
    .then(res=>{
        return{
            type:GEISHOUYELIST,
            list:res.data.result,
        }
        
    })
}



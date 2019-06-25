const defaultState={
    swipe1:[
        {
            "title": "沙茶酱焖香菇鸡",
            "img": "https://pic.ecook.cn/web/50520879.jpg!wl280",
            "author": "真馜花",
            "collect_num": "41人收藏"
        },
        {
            "title": "番茄金针菇豆腐汤",
            "img": "https://pic.ecook.cn/web/263438638.jpg!wl280",
            "author": "个性胜过姿色",
            "collect_num": "544人收藏"
        },
        {
            "title": "椒盐土豆片",
            "img": "https://pic.ecook.cn/web/263469627.jpg!wl280",
            "author": "你的星星980",
            "collect_num": "3人收藏"
        },
        {
            "title": "拔丝地瓜",
            "img": "https://pic.ecook.cn/web/263440189.jpg!wl280",
            "author": "GIFHTC",
            "collect_num": "208人收藏"
        },
        {
            "title": "糖醋里脊肉",
            "img": "https://pic.ecook.cn/web/263440213.jpg!wl280",
            "author": "GIFHTC",
            "collect_num": "120人收藏"
        }
    ]
}



export default (state=defaultState,action)=>{
   
    switch(action.type){

        
      
        default:
        return state;
        break;
    }
}
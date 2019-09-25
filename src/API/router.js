export const router = {
    login:{
        path:"/login"
    },
    home:{ 
        path:"/home",
        children:{
            index:"/home/index"
        }
        
    }
}
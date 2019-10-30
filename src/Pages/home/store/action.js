import {
    Home_setUserInfo
} from './type';

export const setUserInfo = (info)=>{

    // return ()=>{
        
    // }

    return {
          type: Home_setUserInfo,
          data: info
    }
}
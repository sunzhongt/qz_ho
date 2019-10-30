import {Home_setUserInfo} from './type';
const defaultState ={
    userInfo:{
        name:"",
        id:"",
        Avatar:"",
        position:"[]",
        planningTime:"",
        overTime:"",
        studentNumber:""
    }
};


export default (state=defaultState,action)=>{
    if(action.type==Home_setUserInfo){
        let newState = JSON.parse(JSON.stringify(state));
        // console.log(action.data)
        newState.userInfo=action.data;

        return newState
    }
     
    return state;
};
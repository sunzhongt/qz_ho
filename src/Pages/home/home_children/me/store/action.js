import {
    Me_setStudent
} from './type';
import http from '../../../../../API/http';

export const setStudent = (id)=>{
    return (dispatch)=>{

        http.get("/qzadmin/mestudent?id="+id ,  
        { headers: {'Content-Type': 'application/x-www-form-urlencoded'},
   
        }).then((res)=>{
            
           dispatch({
               type: Me_setStudent,
               data: res.data.data
           })
         
       }) 
      
    }
}
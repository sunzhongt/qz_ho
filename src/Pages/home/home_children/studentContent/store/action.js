import {
    Student_getStudent,
    Student_getItemStudentContent
} from './type';
import http from '../../../../../API/http';



export const setStudent = (id)=>{
    return (dispatch)=>{
      http.get("/qzadmin/mestudent?id="+id,  
        { headers: {'Content-Type': 'application/x-www-form-urlencoded'}, 
        }).then((res)=>{
            dispatch({
                type: Student_getStudent,
                data: res.data.data
            })
            dispatch({
                type: Student_getItemStudentContent,
                id:res.data.data[0].id
            })



           
        //    this.props.getItemStudentContent(res.data.data[0].id);
            
          
       }) 
       
    }
}
export const getItemStudentContent=(id)=>{
       return (
        {
            type: Student_getItemStudentContent,
            id
        } 
       )
}
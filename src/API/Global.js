
export const Global={
    pagesHeight:window.innerHeight-100,
    Aname:'88e3y83jhd',
    Bname:'9ie3ich83g',
    Apws:"9i3eu8vhd",
    Bpws:"0ie8w3jid",
    userFun:(an,bn,ap,bp,Fun)=>{
        var userInfo= localStorage.getItem("qzadmin");
        if(userInfo&&userInfo[0]=="{"){
              userInfo = JSON.parse(userInfo) ;
               
             if(userInfo.isOkl&& userInfo.isl&&userInfo.isOkl=="right"&&userInfo.isl=="right"&&userInfo.passWord.trim()&&userInfo.userName.trim()) {
          
                var newName = userInfo.userName.split(an)
                    newName = newName[1].split(bn)
                var newPws = userInfo.passWord.split(ap)
                    newPws = newPws[1].split(bp)
                  
                    return {
                        userName:newName[0],
                        passWord:newPws[0],
                    }
               
             }else {
               Fun()
             }
        }else{
            Fun()
        }
    },
    timeFormatter: (value)=>{ 
         var da = new Date(value.replace("/Date(", "").replace(")/" , "").split( "+")[0]);
         return da.getFullYear() + "-" + ((da.getMonth() + 1) < 10 ? "0" + (da.getMonth() + 1):(da.getMonth() + 1))+ "-" + (da.getDate() < 10 ? "0" + da.getDate():da.getDate())   ;
     } 
}
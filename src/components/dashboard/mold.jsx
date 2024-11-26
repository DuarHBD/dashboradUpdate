import React from "react";

function Mold({data}){

    return(
        <div style={{width:'33% ',height:'350px'}}>
            <h1 className="fs-3 text-secondary ps-2 mb-3">Mold Image</h1>
        <div style={{display:'flex', justifyContent:'space-around', alignItems:'center',flexDirection:'column' }}>
        <div style={{width:'80%',height:'220px',borderRadius:'25px',overflow:'hidden'} }>
           <img src="https://i.ytimg.com/vi/2g6GnIxTAEA/maxresdefault.jpg" alt=""  style={{width:'100%',height:'100%',objectFit:'cover'}}/>
        </div>  
       
        </div>
        <div className=" ps-2 my-3"><h1 className="fs-3 text-secondary">Main Short: <span className="fs-1 " style={{fontWeight:'700', color:'#414141'}}>{data.mainshot}</span></h1></div>
        </div>
       
    )
}
export default Mold
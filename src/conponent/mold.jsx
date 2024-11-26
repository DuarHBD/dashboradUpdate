import React from "react";

function Mold(){

    return(
        <div style={{width:'33% ',height:'300px'}}>
            <h1 className="fs-3 text-secondary ps-2 mb-3">Mold Image</h1>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <div style={{width:'80%',height:'200px',borderRadius:'25px',overflow:'hidden'} }>
           <img src="https://i.ytimg.com/vi/2g6GnIxTAEA/maxresdefault.jpg" alt=""  style={{width:'100%',height:'100%',objectFit:'cover'}}/>
        </div>  
        </div>
        
        </div>
       
    )
}
export default Mold
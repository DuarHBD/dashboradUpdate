import React from "react";

function Header(){

 return(
    <div style={{backgroundColor:'#F95454'}} className="d-flex justify-content-between align-items-center  text-white p-3">

         <div>
          <h5>PartName: <span>FAN_CASE_L</span></h5>
          <h6>PartCode: <span>VU25Y393G01</span></h6>
        </div>
        <div>
          <h6>Status: <span style={{color:'lightgreen'}}>Running</span></h6>
        </div>
    </div>
 )

}
export default Header;
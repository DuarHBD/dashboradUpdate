import React from "react";
import './dashboard.css'
import DoughnutChartsNested from "./pieChartComponent";
import Header from "./header";
import TotalShort from "./totalShort";
import DetailBar from "./detailbar";
import Mold from "./mold";
import WeekChart from "./weekChart";
import { useLocation, useParams ,Link} from 'react-router-dom';


function Dashboard() {
    const { partname } = useParams();  // รับ partname จาก URL
    const location = useLocation();  // ใช้ useLocation เพื่อดึงข้อมูลจาก state
    const data = location.state?.data;  // รับข้อมูลที่ส่งมาจาก Table ถ้ามีค่า ถ้าไม่มีundifine
    
    // ค้นหาข้อมูลที่ตรงกับ partname
    const item = data ? data.find((row) => row.partname === partname) : null;
    console.log(item)
    return (
    <div className="container mt-4 ">
      <Header data={{partname:item.partname,partcode:item.partcode,status:item.status,shot:item.countershot ,target:item.target}}/>
      <DetailBar/>
      <div className="d-flex mt-2">
      <Mold data={{mainshot:item.mainshot}}/>
      <DoughnutChartsNested data={{shot:item.countershot ,target:item.target}}/>
      <div className="d-flex flex-column" style={{width:'33%'}}>
      <TotalShort data={{shot:item.countershot,target:item.target}}/>
      <WeekChart/>
      </div>
     
      </div>
      <Link to={`/table`}>
      <div className="text-center "><button className="btn btn-outline-danger my-3">กลับสู่หน้าหลัก</button></div>
      </Link>
     
    </div>
  );
}

export default Dashboard;


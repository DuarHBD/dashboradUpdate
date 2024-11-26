import React from "react";
import './App.css'
import DoughnutChartsNested from "./conponent/pieChartComponent";
import Header from "./conponent/header";
import TotalShort from "./conponent/totalShort";
import DetailBar from "./conponent/detailbar";
import Mold from "./conponent/mold";
import WeekChart from "./conponent/weekChart";

function App() {
  return (
    <div className="container mt-4 ">
      <Header/>
      <DetailBar/>
      <div className="d-flex mt-2">
      <Mold/>
      <DoughnutChartsNested/>
      <div className="d-flex flex-column" style={{width:'33%'}}>
      <TotalShort/>
      <WeekChart/>
      </div>
     
      </div>
      <div className="text-center "><button className="btn btn-outline-danger my-3">กลับสู่หน้าหลัก</button></div>
    </div>
  );
}

export default App;



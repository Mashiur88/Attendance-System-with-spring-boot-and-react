import React from "react";
import AdminDashboard from "./AdminDashboard";
import './table.css';
import './dashboard.css';
import { useState,useEffect } from "react";
import axios from "axios";

const CheckInList=()=>{
  const [showDate, setShowDate]= useState();
  const[checkIn, setCheckIn] = useState([]);

  useEffect(()=>{
    axios.get("/checkIns")
    .then(response=>{
      setCheckIn(response.data._embedded.checkIns);
      console.log(response.data._embedded.checkIns);
    }).catch(error=>{
        console.log(error);
    });
}, []);


return(
  <div> 
    <AdminDashboard/>
    <div>
    <input on onChange={(e)=>setShowDate(e.target.value)} className="date" type='date'/>
    <select className="date-picker" name="month" id="month">
            <option value="1">January</option>
            <option value="2">February</option>
          </select>
     </div>
    <table id="table">
      <thead>
      <tr>
        <th>UserId</th>
        <th>Check In Date Time</th>
        <th>Remarks</th>
      </tr>
      </thead>
      {checkIn.map((row)=>{
        return(
          <tbody>
          <tr>
            <td>{row.id}</td>
            <td>{row.checkInDateTime}</td>
            <td>{row.remarks}</td>
          </tr>
          </tbody>
        );
      })}
  </table>
  </div>
);
};

export default CheckInList;
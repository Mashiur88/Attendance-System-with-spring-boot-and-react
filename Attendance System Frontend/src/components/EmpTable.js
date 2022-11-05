import React from "react";
import AdminDashboard from "./AdminDashboard";
import './table.css';
import './dashboard.css';

const EmpTable=({checkIn})=>{
  const onButtonClicked=()=>{
    const m=new Date();
    let year=m.getFullYear();
    let month = m.getMonth();
    let date=m.getDate();
    let hour=m.getHours();
    let min=m.getMinutes();
    let remarks = "";
    if(hour > 9){
      if(min > 30){
        remarks = "late";
      }
      else{
        remarks = "Not late";
      }
    }
    else{
      remarks = "Not late";
    }
    let checkIntime = {
      check_in_date_time: m,
      
    }

    const res = axios.post('/checkIns',addUser);
    if(res.addUser.status === 201){
        navigate("/users");
    }

    else if(res.addUser.status === 422){
        window.alert(res.messages);
    }
    console.log(`today is ${date}/${month}/${year} and the time is : ${hour}.${min}`);
  }
return(
  <div> 
    <AdminDashboard/>
    <div className="dashboard">
        <button onClick={onButtonClicked} className="button">Check In</button>
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
            <td>{row.user_id}</td>
            <td>{row.check_in_date_time}</td>
            <td>{row.remarks}</td>
          </tr>
          </tbody>
        );
      })}
  </table>
  </div>
);
};

export default EmpTable;
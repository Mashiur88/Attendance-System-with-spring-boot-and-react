import React from "react";
import "./dashboard.css";
import EmpTable from "./EmpTable";

const checkIn = [
  {
    user_id: '2',
    check_in_date_time: '2022-03-25 11:13:00',
    remarks: 'late'
  },
  {
    user_id: '3',
    check_in_date_time: '2022-03-25 11:13:00',
    remarks: 'late'
  },
  {
    user_id: '4',
    check_in_date_time: '2022-03-25 11:13:00',
    remarks: 'late'
  }
];

const EmpDashboard=()=>{
  const onButtonClicked=()=>{
    const m=new Date();
    let year=m.getFullYear();
    let month = m.getMonth();
    let date=m.getDate();
    let hour=m.getHours();
    let min=m.getMinutes();
    console.log(`today is ${date}/${month}/${year} and the time is : ${hour}.${min}`);
  }
  return(
    <React.Fragment>
      <div className="dashboard">
        <button onClick={onButtonClicked} className="button">Check In</button>
      </div>
        <hr/>
      <div>
        <EmpTable checkIn={checkIn} />
      </div>
    </React.Fragment>
  );
};

export default EmpDashboard;
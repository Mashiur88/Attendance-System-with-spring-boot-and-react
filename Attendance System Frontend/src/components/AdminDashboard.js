import React, { useState } from "react";
import {BrowserRouter as Router, Route, Routes, Switch, Link} from 'react-router-dom';
//import Table from "./Table";
import "./dashboard.css";

const AdminDashboard=()=>{
  return(
    <React.Fragment>
      <nav>
        <ul>
          <li><Link to="/userList">User List</Link></li>
          <li><Link to="/attendance">Give Attendance</Link></li>
          <li><Link to="/createemployee">Create User</Link></li> 
          <li><Link to="/attendancelist">Attendance List</Link></li>
          
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default AdminDashboard;
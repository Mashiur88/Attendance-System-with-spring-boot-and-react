import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom'; 
import React, { useState } from "react";
import EmpDashboard from "./components/EmpDashboard";
import Table from "./components/Table";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import CreateEmployee from "./components/CreateEmployee";
import EmpTable from './components/EmpTable';
import CheckInList from './components/CheckInList';
import RestAPI from './Api/RestAPI';
import EditEmployee from './components/EditEmployee';


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

const user=[
  {
    id: 1,
    name: 'mashiur',
    username: 'Mashiur_1',
    password: 'password',
    email: 'mashiur@gmail.com',
    gender: 'MALE',
    phone_no: '01754155460',
    role: 'ADMIN',
    designation: 'Engineer'
},
{
  id: 2,
  name: 'mashiur',
  username: 'Mashiur_2',
  password: 'password',
  email: 'mashiur@gmail.com',
  gender: 'MALE',
  phone_no: '01754155460',
  role: 'employee',
  designation: 'Engineer'
},
{
  id: 3,
  name: 'mashiur',
  username: 'Mashiur_3',
  password: 'password',
  email: 'mashiur@gmail.com',
  gender: 'MALE',
  phone_no: '01754155460',
  role: 'employee',
  designation: 'Engineer'
},
{
  id: 4,
  name: 'mashiur',
  username: 'Mashiur_4',
  password: 'password',
  email: 'mashiur@gmail.com',
  gender: 'MALE',
  phone_no: '01754155460',
  role: 'employee',
  designation: 'Engineer'
}
];

const App=()=>{
  return(

    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/AdminDashboard' element={<AdminDashboard/>}/>
      <Route path='/userList' element={<Table/>}/>
      <Route path='/attendance' element={<EmpTable checkIn={checkIn}/>}/>
      <Route path='/createemployee' element={<CreateEmployee/>}/>
      <Route path='/users/edit/:userid' element={<EditEmployee/>}></Route>
      <Route path='/attendancelist' element={<CheckInList checkIn={checkIn}/>}/>
    </Routes>
    
    
  );
};

export default App;
import React, { useState,useEffect } from "react";
import AdminDashboard from "./AdminDashboard";
import { redirect, useParams } from "react-router-dom";
import "./Form.css";
import axios from "axios";

const EditEmployee=()=>{

  let {userid} = useParams();
  const[editUser, setAddUser]=useState({
    name:'',
    email:'',
    username:'',
    password:'',
    phone_no:'',
    designation:'',
    gender:'',
    role:''
  });
 

  useEffect(()=>{
    axios.get("/users/"+userid)
    .then(response=>{
      console.log(response.data);
      setAddUser(response.data);
    }).catch(error=>
    {
      console.log(error);
    });
}, []);

  const onFormChange=(event)=>{
    event.preventDefault();
    const fieldName= event.target.getAttribute('name');
    const fieldValue=event.target.value;
    const newFormData={...editUser};
    newFormData[fieldName]=fieldValue;
    setAddUser(newFormData);
  };

  
  const onFormSubmit=(event)=>{
    event.preventDefault();
    const res = axios.put('/users/'+userid,editUser);
    if(res.editUser.status === 201){

    }

    else if(res.editUser.status === 422){
        
        window.alert(res.messages);
        
    }
  };  

  return(
    <React.Fragment>
      <AdminDashboard/>
    <div className="shadow-lg form">
      <h2 className='middle text-center'>Edit Form</h2>
      <form onSubmit={onFormSubmit} id='userForm' method="POST" encType="multipart/formdata">
        <input className="field" 
        name='name' 
        id='name' 
        type='text' 
        value={editUser.name}
        required="required"
        onChange={onFormChange}
        />

        <input className="field" 
        name='email' 
        id='email' 
        type='email' 
        value={editUser.email}
        onChange={onFormChange}
        />

        <input className="field" 
        name='username' 
        id='username'
        type='text' 
        value={editUser.username}
        required="required"
        onChange={onFormChange}
        />

        <input className="field" 
        id='password'
        name='password'
        type='password' 
        value={editUser.password}
        required="required"
        onChange={onFormChange}
        />

        <input className="field" 
        id='phoneNo'
        name='phone_no'
        type='text' 
        value={editUser.phone_no}
        required="required"
        onChange={onFormChange}
        />

        <input className="field" 
        id='designation'
        name='designation'
        type='text' 
        value={editUser.designation}
        required="required"
        onChange={onFormChange}
        />

        <label className="form-label"><b>Select Gender :</b></label> <br/>
        {(editUser.gender === "MALE") ? <input type='radio' name='gender' id='male' value='MALE' onChange={onFormChange} checked/> : <input type='radio' name='gender' id='male' value='MALE' onChange={onFormChange}/>}
        <label>Male</label>
        {(editUser.gender === "FEMALE") ? <input type='radio' name='gender' id='female' value='FEMALE' onChange={onFormChange} checked/> : <input type='radio' name='gender' id='female' value='FEMALE' onChange={onFormChange}/>}
        <label>Female</label>
        {(editUser.gender === "OTHERS") ? <input type='radio' name='gender' id='other' value='OTHERS' onChange={onFormChange} checked/> : <input type='radio' name='gender' id='other' value='OTHERS' onChange={onFormChange}/>}
        <label>Other</label><br/>

        <label><b>Select Role :</b></label> <br/>
        {(editUser.role === "ADMIN") ? <input type='radio' name='role' id='admin' value='ADMIN' onChange={onFormChange} checked/> : <input type='radio' name='role' id='admin' value='ADMIN' onChange={onFormChange}/>}
        <label>Admin</label>
        {(editUser.role === "EMPLOYEE") ? <input type='radio' name='role' id='employee' value='EMPLOYEE' onChange={onFormChange} checked/> : <input type='radio' name='role' id='employee' value='EMPLOYEE' onChange={onFormChange}/>}
        <label>Employee</label>

        <input className="text-center" type='submit' value='Submit'>
        </input>
      </form>
    </div>
    </React.Fragment>
  );
};

export default EditEmployee;
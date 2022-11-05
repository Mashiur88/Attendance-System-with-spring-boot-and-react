import React, { useState } from "react";
import AdminDashboard from "./AdminDashboard";
import { redirect,useNavigate } from "react-router-dom";
import "./Form.css";
import axios from "axios";

const CreateEmployee=()=>{

  const navigate = useNavigate();
  const[addUser, setAddUser]=useState({
    name:'',
    email:'',
    username:'',
    password:'',
    phone_no:'',
    designation:'',
    gender:'',
    role:''
  });

  const onFormChange=(event)=>{
    event.preventDefault();
    const fieldName= event.target.getAttribute('name');
    const fieldValue=event.target.value;
    const newFormData={...addUser};
    newFormData[fieldName]=fieldValue;
    setAddUser(newFormData);
    
  };


  
  const onFormSubmit=(event)=>{
    event.preventDefault();

    const res = axios.post('/users',addUser);
    if(res.addUser.status === 201){
        navigate("/users");
    }

    else if(res.addUser.status === 422){
        window.alert(res.messages);
    }
  };  

  return(
    <React.Fragment>
      <AdminDashboard/>
    <div className="shadow-lg form">
      <h2 className='middle text-center'>User Form</h2>
      <form onSubmit={onFormSubmit} id='userForm' method="POST" encType="multipart/formdata">
        <input className="field" 
        name='name' 
        id='name' 
        type='text' 
        placeholder="Enter Name.."
        required="required"
        onChange={onFormChange}
        />

        <input className="field" 
        name='email' 
        id='email' 
        type='email' 
        placeholder="Enter Email.."
        required="required"
        onChange={onFormChange}
        />

        <input className="field" 
        name='username' 
        id='username'
        type='text' 
        placeholder="Enter Username.."
        required="required"
        onChange={onFormChange}
        />

        <input className="field" 
        id='password'
        name='password'
        type='password' 
        placeholder="Enter Password.."
        required="required"
        onChange={onFormChange}
        />

        <input className="field" 
        id='phoneNo'
        name='phone_no'
        type='text' 
        placeholder="Enter Phone Number.."
        required="required"
        onChange={onFormChange}
        />

        <input className="field" 
        id='designation'
        name='designation'
        type='text' 
        placeholder="Enter Designation.."
        required="required"
        onChange={onFormChange}
        />

        <label className="form-label"><b>Select Gender :</b></label> <br/>
        <input type='radio' name='gender' id='male' value='MALE' onChange={onFormChange}/>
        <label>Male</label>
        <input type='radio' name='gender' id='female' value='FEMALE' onChange={onFormChange}/>
        <label>Female</label>
        <input type='radio' name='gender' id='other' value='OTHERS' onChange={onFormChange}/>
        <label>Other</label><br/>

        <label><b>Select Role :</b></label> <br/>
        <input type='radio' name='role' id='admin' value='ADMIN' onChange={onFormChange}/>
        <label>Admin</label>
        <input type='radio' name='role' id='employee' value='EMPLOYEE' onChange={onFormChange}/>
        <label>Employee</label>

        <input className="text-center" type='submit' value='Submit'>
        </input>
      </form>
    </div>
    </React.Fragment>
  );
};

export default CreateEmployee;
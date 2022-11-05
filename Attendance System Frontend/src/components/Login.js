import React,{useRef, useState} from "react";
import {Link, redirect, useNavigate} from 'react-router-dom';
import axios from "axios";
import "./Form.css";



const Login=()=>{
  const navigate = useNavigate();
  let userNameref = useRef(null);
  let passwordref = useRef(null);
  const [user,setUser] = useState([]);

  const onfromSubmit = (e) =>{
    e.preventDefault();
    let name = userNameref.current.value;
    let password = passwordref.current.value;

    axios.get("/users/search/findUserByUsernameAndPasswordNamedParamsNative?username="+name+"&password="+password)
    .then(response=>{
      setUser(response.data);
      console.log(response.data);
      return redirect('/AdminDashboard');
    }).catch(error=>{
        console.log(error);
    });

    localStorage.setItem('user', user);
    var user = localStorage.getItem('user');
    console.log(user);

    // window.localStorage.json("user_id",);

  }
  return(
    <div className="form">
      <h2 className="middle">Login</h2>
      <form onSubmit={(e)=>onfromSubmit(e)}>
        <input className="field" type='text' ref={userNameref} placeholder="Enter Username.."></input>
        <input className="field" type="password" ref={passwordref} placeholder="Enter Password.."></input>
        <input type="submit" value="Login"></input>
      </form>
    </div>
  );
};

export default Login;
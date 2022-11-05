import React,{ useEffect, useState } from "react";
import Row from "./Row";
import axios from "axios";
import "./table.css";
import { useNavigate } from "react-router-dom";
//import CreateEmployee from "./CreateEmployee";
import EditableRow from "./EditableRow";
import AdminDashboard from "./AdminDashboard";


const Table=()=>{
  const [name, setName]=useState("");
  const navigate = useNavigate();
  const [editForm, setEditForm]=useState({
    id:"",
    name:"",
    username:'',
    email:'',
    gender:'',
    phone_no:'',
    role:'',
    designation:''
  })

  const[users, setUsers] = useState([]);


  useEffect(()=>{

    axios.get("/users")
    .then(response=>{
      setUsers(response.data._embedded.users);
      console.log(response.data._embedded.users);
    }).catch(error=>{
        console.log(error);
    });
}, []);



  const onEditClick=(event, id)=>{
    event.preventDefault();
    navigate("/users/edit/"+id);
  }

  const searchTable = (name)=>{
    console.log(name);
    axios.get("/users/search/findAllByNameContains?name="+name)
    .then(response=>{
      setUsers(response.data._embedded.users);
      console.log(response.data._embedded.users);
    }).catch(error=>{
        console.log(error);
    });

  }


  const onDeleteClick=(id)=>{


    axios.delete("/users/"+id)
    .then(response=>{
      axios.get("/users")
      .then(response=>{
        setUsers(response.data._embedded.users);
        console.log(response.data._embedded.users);
      }).catch(error=>{
          console.log(error);
      });
    });
      
  };

  return(
    <React.Fragment>
      <AdminDashboard/>
      <div>
          <input className="search-bar" name="search" id="search" type='text' onChange={(e)=>searchTable(e.target.value)} placeholder="search user.."/>
          </div>

          <table id="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Phone No.</th>
                <th>Role</th>
                <th>Designation</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            { users.map(user=>(

              <tr>
                  {/* {editId === user.id ? <EditableRow editForm={editForm} onCancelClick ={()=>setEditId(null)} onEditFormChange={onEditFormChange} /> : <Row user={user} onDeleteClick={onDeleteClick} onEditClick={onEditClick}/>} */}
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>{user.phone_no}</td>
                  <td>{user.role}</td>
                  <td>{user.designation}</td>
                  <td>
                  <button onClick={(event)=>onEditClick(event, user.id)} type="button" >edit</button>
                    <button onClick={()=>onDeleteClick(user.id)} type="button" >delete</button>
                  </td>
                </tr>
              )
            )}
            </tbody>
          </table>
    </React.Fragment>
  );
};
export default Table;
import React from "react";
const Row=({user, onEditClick, onDeleteClick})=>{
   return(
    <tr>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.gender}</td>
      <td>{user.phone_no}</td>
      <td>{user.role}</td>
      <td>{user.designation}</td>
      <td>
        <button onClick={(event)=>onEditClick(event, user)} type="button" >edit</button>
        <button onClick={()=>onDeleteClick(user.id)} type="button" >delete</button>
      </td>
    </tr>
  );
};

export default Row;
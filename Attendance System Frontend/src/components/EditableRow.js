import React from "react";

const EditableRow=({editForm , onEditFormChange, onCancelClick})=>{
  return(
      <tr>
        <td>
          <input
            name='name' 
            id='name' 
            type='text' 
            required="required"
            value={editForm.name}
            onChange={onEditFormChange}
          />
        </td>
        <td>
          <input
            name='username' 
            id='username'
            type='text' 
            required="required"
            value={editForm.username}
            onChange={onEditFormChange}
          />
        </td>
        <td>
          <input
            name='email' 
            id='email' 
            type='email' 
            required="required"
            value={editForm.email}
            onChange={onEditFormChange}
          />
        </td>
        <td>
          <select name="gender" id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </td>
        <td>
          <input
            id='phoneNo'
            name='phone_no'
            type='text' 
            required="required"
            value={editForm.phone_no}
            onChange={onEditFormChange}
          />
        </td>
        <td>
          <select name="role" id="role">
            <option value="ADMIN">ADMIN</option>
            <option value="employee">employee</option>
          </select>
        </td>
        <td>
          <input
            id='designation'
            name='designation'
            type='text' 
            required="required"
            value={editForm.designation}
            onChange={onEditFormChange}
          />
        </td>
        <td>
        <td>
        <button type="submit" >save</button>
        <button onClick={onCancelClick} type="button">cancel</button>
      </td>
        </td>
      </tr>
    
  );
};

export default EditableRow;

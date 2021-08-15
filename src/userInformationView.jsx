import React, {useState} from 'react';
import { Grid } from '@material-ui/core'; 


const UserInfoView = ({userList}) => {
  return <>
     {
       !userList.length ? <h3>No User Found</h3> : 
       <>
        <h3>User List</h3>
        {
          userList.map(user=> <>  
              <h4>User Name: {user.name}</h4>
              <h4>User Age: {user.age}</h4>
              <h4>User Profession: {user.profession}</h4>
              <hr />
          </>)
        }
       </>
     } 
  </>
}

export default UserInfoView;

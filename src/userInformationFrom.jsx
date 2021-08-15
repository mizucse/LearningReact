import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { Grid } from '@material-ui/core';

const UserInfoForm = ({addUser}) => { 
    const [user,setUser] = useState({
      name: '',
      age: '',
      profession: ''
    })
    const addUserInfo = (e,dataType) => {
      setUser({
        ...user,[dataType]: e.target.value
      })
    }
    const submitUser = () => {
      addUser(user)
    }
    return <>
        <Grid col md={12} lg={12}>
            <h1>Update My Information</h1>
          <div> 
            <TextField onChange={(e) => addUserInfo(e,'name')} id="standard-basic" value={user.name} label="Name" />
          </div>
          <div>
            <TextField onChange={(e) => addUserInfo(e,'age')} value={user.age} label="age"/>
          </div>
          <div>
            <TextField onChange={(e) => addUserInfo(e,'profession')} value={user.profession} label="profession"/>
          </div> 
          <Button onClick={submitUser} variant="contained" color="primary">Submit</Button>
        </Grid> 
    </>
}

export default UserInfoForm;
import React, {useEffect, useState} from 'react';
import { Grid } from '@material-ui/core'; 
import UserInfoForm from './userInformationFrom';
import UserInfoView from './userInformationView';


const App = () => {
  const [userList, setUserList] = useState([]);

  const addUser = (userdata) => {
    // const tempUserList = userList
    // tempUserList.push(userdata)
    // setUserList(tempUserList)
    setUserList([...userList,userdata]);
    // console.log(userdata)
  }
  useEffect(()=>{
    console.log('Component did mount')
  },[]);

  useEffect(()=>{
    console.log('Component did update')
  },[userList]);
 
  useEffect(()=>{
    console.log('Component did update')
    return() => {
      console.log('Component will unmount')
    }
  },[userList]);
  // console.log(userList)
  
  return ( 
    <Grid container justifyContent={'center'}> 
        <Grid col container md={6}>
          <Grid col md={12} lg={12}>
          <UserInfoView userList={userList}/>
          </Grid>
        </Grid>
        <Grid col container md={6}>
          <Grid col md={12} lg={12}>
          <UserInfoForm addUser={addUser}/>
          </Grid>
        </Grid>
    </Grid> 
  );
}

export default App;

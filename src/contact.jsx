import React, {useState,useEffect} from 'react';

const Contact = (props) => {
    const [name,setName] = useState('mizan');
    const [age,setAge] = useState(20);

    const changeName = () => {
        setName('Mizu');
    }
    const changeAge = () => {
        setAge(25);
    }

    useEffect(()=> {
        console.log("in contact useEffect")
    },[name,age]);

    return <>
        <p>This is {props.pageName}</p>
        <p>My Name is: {name}</p>
        <p>My Age is: {age}</p>
        <button onClick={changeName}>Change Name</button>
        <button onClick={changeAge}>Change Age</button>
    </>
}

export default Contact;
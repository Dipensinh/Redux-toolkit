import React from 'react'
// import './App.css'
import { fakeuserdata } from '../Api/index';
import {useDispatch} from "react-redux"
import { adduser } from '../Store/Slice/Userslice';
import Displayuser from './Displayuser';

const Userdetails = () => {
    
    const dispatch = useDispatch()

    const useradd = (payload) =>{
        console.log(payload);
        dispatch(adduser(payload))
    }

  return (
    <>
     <div className="container">
        <div className="text">
            <h4>User Details</h4>
        </div>
        <div className="btnn">
        <button onClick={()=>useradd(fakeuserdata())}>Add new user</button>
        </div>
        <div>
            <ul>
                <Displayuser/>
                <hr />
            </ul>
        </div>
     </div>
    </>
  );
};

export default Userdetails; 

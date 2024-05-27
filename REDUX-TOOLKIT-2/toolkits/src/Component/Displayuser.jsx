import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdDeleteForever } from "react-icons/md";
import { removeuser } from '../Store/Slice/Userslice';
const Displayuser = () => {

    const dispatch = useDispatch()

    const data = useSelector ((state)=>{
        return state.users
    })

    const deletuser = (id) =>{
        // console.log("deletuser" + id);
        dispatch(removeuser(id))
    }
    console.log(data);

  return (
    <>
    <div className="taxt">
        {
            data.map((user , id)=>{
                return <li key={id}>
                    {user}
                    <button className='buttons' onClick={()=>deletuser(id)}><MdDeleteForever /></button>
                </li>
            })
        }
    </div>
    </>
  )
}

export default Displayuser

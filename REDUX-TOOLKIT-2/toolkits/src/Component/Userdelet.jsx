import React from 'react'
import { useDispatch } from 'react-redux'
import { deletalluser } from '../Store/Slice/Userslice'

const Userdelet = () => {

  const dispatch = useDispatch()

  const clearalluser = () =>{
    dispatch(deletalluser())
  }

  return (
    <>
    <div className="btns">
        <button onClick={clearalluser}>Delet Alluser</button>
    </div>
    </>
  )
}

export default Userdelet

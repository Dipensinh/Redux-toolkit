import React from 'react';
import './App.css'
import Navbar from './Component/Navbar';
import Userdetails from './Component/Userdetails';
import Userdelet from './Component/Userdelet';

function App() {

  return (
    <>
    <Navbar/>
    <Userdetails/>
    <Userdelet/>
    {/* <h1>redux toolkit</h1> */}
    </>
  )
}

export default App

import React from 'react'
import Sidebar from './Sidebar'
import ContantContainer from './ContantContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex'>
        
        <Sidebar/>
        {/* <ContantContainer/> */}
        <Outlet/>
    </div>
  )
}

export default Body
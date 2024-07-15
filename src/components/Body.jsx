import React from 'react'
import Sidebar from './Sidebar'
import ContantContainer from './ContantContainer'

const Body = () => {
  return (
    <div className='grid grid-flow-col'>
        
        <Sidebar/>
        <ContantContainer/>
    </div>
  )
}

export default Body
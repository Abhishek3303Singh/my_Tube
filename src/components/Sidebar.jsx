import React from 'react'
import {useSelector } from 'react-redux'

const Sidebar = () => {
  const {isSidebarOpen} = useSelector(store=>store.nav)
  // console.log(isSidebarOpen)
  if(!isSidebarOpen){
    return null
  }
  return (
    <div className='p-5 shadow-lg w-48'>
        <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <hr className='mt-2' />

      <h1 className='font-bold pt-5'>Subascriptions</h1>
      <ul>
        <li>Music</li>
        <li>Dance</li>
        <li>Gaming</li>
        <li>Sports</li>
      </ul>
      <hr className='mt-2'/>

      <h1 className='font-bold pt-5'>You</h1>
      <ul>
        <li>Watch Later</li>
        <li>History</li>
        <li>Liked videos</li>
        <li>Playlists</li>
      </ul>
    </div>
  )
}

export default Sidebar
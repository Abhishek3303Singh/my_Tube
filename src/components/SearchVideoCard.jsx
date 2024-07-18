
import React from 'react'
import user from '../images/user.png'
const SearchVideoCard = ({searchData}) => {
  return (
    <div className='flex gap-4 my-2 mx-5  p-2 shadow-lg'>
        <img
        className='w-96 h-64 rounded-lg' 
        src={searchData.snippet.thumbnails.high.url} alt="" />
        <div>
        <h1 className='text-2xl font-bold'>{searchData.snippet.title}</h1>
        <p className='text-sm px-1 py-2'><span className='pr-2'>200k views</span> <span>14 hours ago</span></p>
        <p className='flex gap-2'> <span><img className='w-8 h-8' src={user} alt="" /></span> {searchData.snippet.channelTitle}</p>
        <p className='py-2 px-1 text-gray-600'>{searchData.snippet.description}</p>
        </div>
    </div>
  )
}

export default SearchVideoCard
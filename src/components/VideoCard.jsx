import React from 'react'

const VideoCard = ({data}) => {
    // console.log(data, 'data')
    const {snippet, statistics} = data;
    const {channelTitle, thumbnails} = snippet
  return (
    <div className='w-72 m-1 shadow-lg'>
        <img className='rounded-lg' src={thumbnails?.medium.url} alt="" />
        <ul>
            <li className='font-bold'>{snippet?.title}</li>
            <li>
                {channelTitle}
            </li>
            <li>{statistics?.viewCount} views</li>
        </ul>
    </div>
  )
}

// High order component
export const AddCard = ({data})=>{
  return(
    <div className='p-2 m-2 border border-gray-700 shadow-zinc-900'>
      <VideoCard data={data}/>
    </div>
  )
}
export default VideoCard
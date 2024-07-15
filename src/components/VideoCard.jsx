import React from 'react'

const VideoCard = ({data}) => {
    console.log(data, 'data')
    const {snippet, statistics} = data;
    const {channelTitle, thumbnails} = snippet
  return (
    <div className='w-72 m-1 shadow-lg'>
        <img className='rounded-lg' src={thumbnails.medium.url} alt="" />
        <ul>
            <li className='font-bold'>{snippet.title}</li>
            <li>
                {channelTitle}
            </li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard
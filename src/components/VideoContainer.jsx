import React, { useEffect, useState } from 'react'
import {YOUTUBE_VIDEOS_API} from "./utils/constants"
import VideoCard from './VideoCard'


const VideoContainer = () => {

  const [videos, setVideos] = useState([])
  useEffect(()=>{
    getData()
  },[])

  const getData = async()=>{
    const data = await fetch(YOUTUBE_VIDEOS_API)
    const jsonData = await data.json()
    setVideos(jsonData.items)
    
  }
  return (
    <div className='flex flex-wrap p-2 justify-evenly'>

      {
        videos.map((video)=><VideoCard key={video.id} data={video}/>)
      }
      
    </div>
  )
}

export default VideoContainer 
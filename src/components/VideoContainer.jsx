import React, { useEffect, useState } from 'react'
import {YOUTUBE_VIDEOS_API} from "./utils/constants"
import VideoCard, { AddCard } from './VideoCard'
import { Link } from 'react-router-dom'
import { getAllVideos } from './utils/videosDataSlice'
import { useDispatch, useSelector } from 'react-redux'
import Shimmer from './Shimmer'

const VideoContainer = () => {
  const {videos,status}=useSelector(store=>store.videos)
const dispatch=useDispatch()
  const [videosData, setVideosData] = useState([])
  const [shimmer,setShimmer] = useState(Array(12).fill(1))
  useEffect(()=>{
    // getData()
    dispatch(getAllVideos(YOUTUBE_VIDEOS_API))
    
  },[])
  

  // const getData = async()=>{
  //   const data = await fetch(YOUTUBE_VIDEOS_API)
  //   const jsonData = await data.json()
  //   setVideos(jsonData.items)
    
  // }
  // console.log(videos,'videos')
  if(status=='loading'){return (
    <div className='flex flex-wrap'>
      {
        shimmer.map((data)=><Shimmer/>)
      }
    </div>

  )}
  return (
    <div className='flex flex-wrap p-2 justify-evenly'>
      {/* {videosData && <AddCard data={videos?.items[0]}/>} */}

      {
        videos&&videos?.items?.map((video)=> <Link to={'/watch?v='+video.id}><VideoCard key={video.id} data={video}/></Link> )
      }
      
    </div>
  )
}

export default VideoContainer 
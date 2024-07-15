import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeSideMenu } from './utils/navSlice'
import { useSearchParams } from 'react-router-dom'

const VideoPlayPage = () => {
    let [searchParam] = useSearchParams()
    console.log(searchParam.get('v'), 'video id')
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(closeSideMenu())
    }, [])
    return (
        <div className='p-2 m-4'>
            <iframe
                width="920" height="475"
                src={"https://www.youtube.com/embed/"+searchParam.get('v')+"?si=m2CVD6I_OqzasXti"}
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowFullScreen>

            </iframe>
        </div>
    )
}

export default VideoPlayPage 
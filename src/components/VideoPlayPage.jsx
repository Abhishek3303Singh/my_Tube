import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeSideMenu } from './utils/navSlice'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'
import LiveChat from './LiveChat'

const VideoPlayPage = () => {
    let [searchParam] = useSearchParams()
    console.log(searchParam.get('v'), 'video id')
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(closeSideMenu())
    }, [])
    return (
        <div className='w-full'>

            <div className='flex'>
                <div className='p-2 m-1 rounded-lg'>
                    <iframe
                    className='rounded-lg'
                        width="820" height="475"
                        src={"https://www.youtube.com/embed/" + searchParam.get('v') + "?si=m2CVD6I_OqzasXti"}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowFullScreen>

                    </iframe>

                </div>

                <div className='w-full z-[100] pt-2'>
                    <LiveChat/>
                </div>

            </div>

            <CommentsContainer />
        </div>
    )
}

export default VideoPlayPage 
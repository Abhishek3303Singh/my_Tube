import React from 'react'
import user from '../images/user.png'

const ChatText = ({name , text}) => {
  return (
    <div className='flex items-center py-2'>
        <img className='w-8 h-8' src={user} alt="userIcon" />
        <span className='font-bold px-2'>{name}</span>
        <span className='text-gray-800'>{text}</span>
        
    </div>
    
  )
}

export default ChatText
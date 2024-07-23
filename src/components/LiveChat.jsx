import React, { useEffect, useState } from 'react'
import ChatText from './ChatText'
import { useDispatch, useSelector } from 'react-redux'
import { addChats } from './utils/chatSlice'


const LiveChat = () => {
    const [chatText, setChatText]= useState('')
    const dispatch =useDispatch()
    const {msg} = useSelector(store=>store.chats)
    useEffect(()=>{
        //Api-polling fetch-data after every 2sec
        const interval = setInterval(()=>{
            dispatch(addChats(
                {
                    name:"Priya",
                    text:"hello 💖"
                }
            ))
            

        },2000)

        return ()=> clearInterval(interval)
    },[])
  return (
    <>
    <div className='z-[2] m-4 mb-0 h-[475px] w-[90%] border border-black pt-0 rounded-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse'>
    
        
        {
            msg.map((chat,index)=><ChatText key={index} name={chat.name} text={chat.text}/>)
        }
        
    </div>
    <form className='ml-4 border border-gray-600 p-1 rounded-xl w-[90%] flex items-center'
    onSubmit={(e)=>{
        e.preventDefault()
        dispatch(addChats({
            name:"Abhi",
            text:chatText
        }))
        setChatText('')
    }}
    
    >
        <input type="text" placeholder='Chat..'
        value={chatText}
        onChange={(e)=>setChatText(e.target.value)}
         className='w-[80%] h-8 px-2 border border-black rounded-full' />
        <button className='border border-black px-2 w-[15%] h-8 pb-1 bg-green-500 font-bold mx-1 rounded-md'> {">>"} </button>
    </form>
    </>
  )
}
 
export default LiveChat
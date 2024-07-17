import React from 'react'
import user from '../images/user.png'

const commentsData=[{
    name:"Abhi",
    commentText:"This is my fav video",
    reply:[{

    }],   
},
{
    name:"Abhi",
    commentText:"This is my fav video",
    reply:[
        {
            name:"PR",
            commentText:"yes this is also my",
            reply:[
                {
                    name:"sharma",
                    commentText:"fake publicity",
                    reply:[
                        {
                            name:"Abhi",
                            commentText:"This is my fav video",
                            reply:[{
                        
                            }],   
                        },
                    ],   
                },
            ],   
        },
    ],   
},
{
    name:"Abhi",
    commentText:"This is my fav video",
    reply:[{

    }],   
},
{
    name:"Abhi",
    commentText:"This is my fav video",
    reply:[{

    }],   
},

]
const Comment = ({data})=>{
    // const {name, commentText, reply}=data
    return( data.name&&
        <div className='m-1 p-2 flex shadow-lg bg-gray-50 rounded-md'>
            <img className='w-10 h-10' src={user} alt="user" />
            <div className='px-5'>
                <h3 className='font-bold text-lg'>@{data.name}</h3>
                <p>{data?.commentText}</p>
            </div>
        </div>
    )
}

const CommnetsList =({commentsData})=>{
    return commentsData.map((comment,index)=>(<div><Comment key={index} data={comment}/>
    <div className='pl-4 ml-5 shadow-sm border border-l-black'>
        {comment?.reply&&<CommnetsList commentsData={comment?.reply} />}
    </div>
    </div>
    ))
}
const CommentsContainer = () => {
  return (
    <div className='m-1 p-4'>
        <h1 className='text-2xl p-2 font-bold'>Comments</h1>
        <CommnetsList commentsData={commentsData} />
    </div>
  )
}

export default CommentsContainer  
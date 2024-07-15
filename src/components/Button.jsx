import React from 'react'

export const Button = (props) => {
  return (
    <div>
        <button className='px-4 py-1 m-2 bg-gray-200 rounded-lg'>{props.name}</button>
    </div>
  )
}

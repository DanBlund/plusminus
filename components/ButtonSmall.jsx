import React from 'react'

const ButtonSmall = ({text, func, funcParameter}) => {
  return (
    <button onClick={() => func(funcParameter)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm py-1 px-2 mx-2 rounded focus:outline-none focus:shadow-outline'>{text}</button>

  )
}

export default ButtonSmall
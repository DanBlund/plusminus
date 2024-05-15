import React from 'react'
import {IButtonSmall} from '../app/interfaces' // Använder interface i TYPESCRIPT för att kunna skicka in props

// Så här kan man ta in propps i react utan typsecript
// const ButtonSmall = ({text, func, funcParameter}) => {

const ButtonSmall: React.FC<IButtonSmall> = ({text, func, funcParameter}) => { // Så här måste vi skriva för att ta emot props i TYPESCRIPT
  return (
    <button 
      onClick={() => func(funcParameter)} 
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm py-1 px-2 mx-2 rounded focus:outline-none focus:shadow-outline'>{text}</button>

  )
}

export default ButtonSmall
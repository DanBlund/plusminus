import React from 'react'
import {IButtonBig} from '../app/interfaces' // Använder interface i TYPESCRIPT för att kunna skicka in props

// Så här kan man ta in propps i react utan typsecript
// const ButtonBig = ({text, func, funcParameter}) => {

const ButtonBig: React.FC<IButtonBig> = ({text}) => { // Så här måste vi skriva för att ta emot props i TYPESCRIPT
  return (
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>{text}</button>
  )
}

export default ButtonBig
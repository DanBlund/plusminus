import React from 'react'

const ButtonBig: React.FC<{children: any}> = ({children}) => { // Så här måste vi skriva för att ta emot props i TYPESCRIPT
  return (
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>{children}</button>
  )
}

export default ButtonBig
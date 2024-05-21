import { ACTIONS } from '@/app/page'
import React, { useState } from 'react'
import ButtonBig from './ButtonBig'


const FormNewList: React.FC<{dispatch: any}> = ({dispatch}) => {
    
    const [name, setName] = useState('')

    function handleSubmit(e: { preventDefault: () => void }) {
        e.preventDefault() // Hindrar att sidan uppdateras vid input
        if(name.length < 1) return
        
        dispatch({type: ACTIONS.ADD_LIST, payload: {name: name, id: crypto.randomUUID()}}) // Payload är ett object som skickar med alla variabler vi behöver för att utföra ACTION
        setName('')
      }

  return (
    <form className="flex bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <input placeholder='New List' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type='text' value={name} onChange={e => setName (e.target.value)} />
        <ButtonBig>Add</ButtonBig>
    </form>
  )
}

export default FormNewList
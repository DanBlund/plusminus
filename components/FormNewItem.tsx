import { ACTIONS } from '@/app/page'
import React, { useState } from 'react'
import ButtonBig from './ButtonBig'


const FormNewItem: React.FC<{dispatch: any}> = ({dispatch}) => {
    
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [owners, setOwners] = useState(1)

    function handleSubmit(e: { preventDefault: () => void }) {
        e.preventDefault() // Hindrar att sidan uppdateras vid input
        if(name.length < 1) return
        
        dispatch({type: ACTIONS.ADD_TO_LIST, payload: {id: crypto.randomUUID(), name: name, price: price, owners: owners}}) // Payload är ett object som skickar med alla variabler vi behöver för att utföra ACTION
        setName('')
        setPrice(0)
        setOwners(1)
      }

  return (
    <form className="flex bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='itemName'>Item Name</label>
        <input id='itemName' placeholder='New Item' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type='text' value={name} onChange={e => setName (e.target.value)} />
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='price'>Price</label>
        <input id='price' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type='number' value={price} onChange={e => setPrice (Number(e.target.value))} />
      </div>        
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='owners'>Owners</label>
        <input id='owners' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type='number' value={owners} onChange={e => setOwners (Number(e.target.value))} />
      </div>  
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='button'>Action</label>
        <ButtonBig>Add</ButtonBig>
      </div>
    </form>
  )
}

export default FormNewItem
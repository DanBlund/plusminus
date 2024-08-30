'use client'
import { useState } from "react"
import ButtonBig from "./ButtonBig"
import { ACTIONS } from "@/app/page"

export const FormSellItem: React.FC<{itemId: string, dispatch: any}> = ({itemId, dispatch}) => { // Så här måste vi skriva för att ta emot props i TYPESCRIPT

  const [priceSold, setPriceSold] = useState(0)

  function handleSubmit(e: { preventDefault: () => void }) {
    console.log(itemId)
    dispatch({type: ACTIONS.SELL_ITEM, payload: {id: itemId, priceSold: priceSold }})
    e.preventDefault() //Prevent page from refreshing
    setPriceSold(0)
  }

  function onClose(e: { preventDefault: () => void }) {
    dispatch({type: ACTIONS.SELL_MODAL, payload: {}})
    e.preventDefault() //Prevent page from refreshing
  }
  
    return (
      <form className="w-80 min-w-80 h-2/6 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
      <h1>Sell Item</h1>
        <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='priceSold'>Price</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id='priceSold' type='number'
                    value={priceSold}  
                    onChange={e => setPriceSold(Number(e.target.value))} 
                    placeholder="Price"/>
        </div>
        <br/>
        <div className="flex justify-around">
          <button onClick={handleSubmit} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Sell</button>    
          <button onClick={onClose} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Close</button>
        </div>
      </form>
    )
}
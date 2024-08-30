import { ACTIONS } from '@/app/page'
import React from 'react'
import { styleText } from 'util'


const ListItems: React.FC<{item: any, dispatch: any}> = ({item, dispatch}) => {

    
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <th scope="row" className="px-3 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {item.name}
        </th>
        <td className="px-3 py-1">
            {item.price}:-
        </td>
        <td className="px-3 py-1">
            {new Date(item.dateBought).toLocaleDateString()}
        </td>
        <td className="px-3 py-1">
            {item.owners} st
        </td>
        <td className="px-3 py-1">
            {item.priceSold !== undefined && item.priceSold + ":-" || ""} 
        </td>
        <td className="px-3 py-1">
            {item.dateSold !== undefined && new Date(item.dateSold).toLocaleDateString() || ""}
        </td>
        <td className="px-3 py-1" style={{backgroundColor: item.paid < 0 ? 'lightGreen' : 'pink'}}>
            {item.paid.toFixed(0)}:-
        </td>
        <td className="px-3 py-1">
            <button onClick={ () => dispatch({type: ACTIONS.DELETE_FROM_LIST, payload: {id: item.id}})} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Delete</button>
            <button onClick={ () => dispatch({type: ACTIONS.SELL_MODAL, payload: {id: item.id}})} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Sell</button>
        </td>
    </tr>
  )
}

export default ListItems

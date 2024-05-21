import { ACTIONS } from '@/app/page'
import Link from 'next/link'
import React from 'react'


const List: React.FC<{list: any, dispatch: any}> = ({list, dispatch}) => {
  return (
  <div>
      <Link className="w-full self-center text-gray-700 text-sm font-bold" 
                    href={`/lists/${list.name}`}>
                    <label>{list.name}</label>
        </Link>
      <button 
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm py-1 px-2 mx-2 rounded focus:outline-none focus:shadow-outline'
        onClick={() => dispatch({type: ACTIONS.DELETE_LIST, payload: {id: list.id}})}
        >Delete</button>
  </div>
  )
}

export default List
'use client'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import {NewListForm} from "/components/NewListForm" 

const Lists = () => {
  const [lists, setLists] = useState([]) //todos

  function addList(title) {
    setLists(currentLists => {
      return [
        ...currentLists, // Tar arrayen med listor och lägger till ett objekt som ser ut som det på nästa rad
        {id: crypto.randomUUID(), title, valueBought: 1, valueSold: 2, itemsBought: 1, itemsSold: 1}, // Alla propps som nya list objektet ska ha
      ]
    })
  }

  function deleteList(id) {
    setLists(currentLists => { // Sätter lists till vad som returnas
      return currentLists.filter(list => list.id !== id) //Returnar nuvarande lista men med filter som säger alla items där list.id inte är id
    } )
  }





  return (
    <>
      <NewListForm addListPropp={addList}/>  {/* addListPropp skickar in funktionen addList till komponenten */}
      <h1>All Lists</h1>
      <ul className='flex flex-col'>
        {lists.length === 0 && "No Lists"}  {/* Om lists är top?  && betyder sant då renderas "No Lists" */}
        {lists.map(list => {
          return <>
            <li key={list.id}>
              <label>
                <Link className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded' href={`/lists/${list.title}`}>{list.title}</Link>
              </label>
              {list.id}
            <button onClick={() => deleteList(list.id)} className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full'>delete</button>
            </li>
          </>
        })}
      </ul>   
    </>
  )
}

export default Lists
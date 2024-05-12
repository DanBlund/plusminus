'use client'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import {NewListForm} from "/components/NewListForm" 
import {ListOfLists} from "/components/ListOfLists" 

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
      <h1>All Lists</h1>
      <ListOfLists lists={lists} deleteList={deleteList}/>
      <NewListForm addListPropp={addList}/>  {/* addListPropp skickar in funktionen addList till komponenten */}
    </>
  )
}

export default Lists
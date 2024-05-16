'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import {NewListForm} from "../../components/NewListForm" 
import {ListOfLists} from "../../components/ListOfLists" 

const Lists = () => {

                          //  ---=== HOOKS ===---

  const [lists, setLists] = useState(() => { // Initial värde är en funktion
    const localValue = localStorage.getItem("LISTS-LS")
    if(localValue == null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => { // Utför funktionen varje gång propertyn i andra argumentet ändras (Vilket är [lists] i detta fall)
    localStorage.setItem("LISTS-LS", JSON.stringify(lists)) // Tar lists och sparar somen Json-string i local storage med namn LIST
  }, [lists])



                            //  ---=== FUNCTIONS ===---

  function addList(title: string) {
    setLists((currentLists: any) => {   // -   "setLists(currentLists => {"   - i vanlig React
      return [
        ...currentLists, // Tar arrayen med listor och lägger till ett objekt som ser ut som det på nästa rad
        {id: crypto.randomUUID(), title, sumBought: 0, sumSold: 0, itemsBought: 0, itemsSold: 0}, // Alla propps som nya list objektet ska ha
      ]
    })
  }

  function deleteList(id: string) {
    setLists((currentLists: any[]) => { // Sätter lists till vad som returnas  -     "setLists(currentLists => {"     - i vanliga React
      return currentLists.filter(list => list.id !== id) //Returnar nuvarande lista men med filter som säger alla items där list.id inte är id
    } )
  }


  
                              //  ---=== RETURN JSX ===---

  return (
    <>
      <h1>All Lists</h1>
      <ListOfLists lists={lists} deleteList={deleteList}/>
      <NewListForm func={addList}/>  {/* addListPropp skickar in funktionen addList till komponenten */}
    </>
  )
}

export default Lists
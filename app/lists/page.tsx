'use client'
import List from '@/components/List'
import React, { useState, useReducer, useEffect } from 'react'
import { ACTIONS } from '@/app/page'
import FormNewList from '@/components/FormNewList'



const Lists = () => { 

  const initiateLists = () => {
    const localValue = localStorage.getItem("LISTS-LS")
    if(localValue === null || localValue === undefined) return []
    else return JSON.parse(localValue)
  }

                            //  ---=== HOOKS ===---
  // inom [] är return values. Första är state, andra är funktion (dispatch) som vi använder för att ändra vårt state
  const [lists, dispatch] = useReducer(reducer, [], initiateLists  ); // reducer är namnet på vår funktion som ändrar vårt state. Andra argument är initial värde

   useEffect(() => { // Utför funktionen varje gång propertyn i andra argumentet ändras (Vilket är [lists] i detta fall)
    localStorage.setItem("LISTS-LS", JSON.stringify(lists)) // Tar lists och sparar somen Json-string i local storage med namn LIST
  }, [lists])
 

                              //  ---=== FUNCTIONS ===---


  function reducer(lists: any, action: { type: any; payload: { name: string, id: string } }) { // lists är vårt current state, Action är vad vi 
      switch(action.type) {
        case ACTIONS.ADD_LIST:
          if( lists.find(
            (list: { name: string }) => list.name === action.payload.name 
            ))   
            { return [...lists] }
          else 
            {return [...lists, newList(action.payload.name)]}
        case ACTIONS.DELETE_LIST:
          return lists.filter((list: { id: string }) => list.id !== action.payload.id)
        default: return lists
      }
    }

  function newList(name: string) {
    return { id: crypto.randomUUID(), name: name}
  }

  
                              //  ---=== RETURN JSX ===---
  return (
    <>
      {lists === undefined || lists.length < 1 ? 
        <p>No Lists</p> 
          : 
        lists.map((list: { id: React.Key | null | undefined }) => {
          return <>
            <List key={list.id} list={list} dispatch={dispatch} />
          </>
      })}

      <FormNewList dispatch={dispatch}></FormNewList>
    </>
  )
}

export default Lists
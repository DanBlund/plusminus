'use client'
import React, { act, useReducer } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { ACTIONS } from '@/app/page'
import FormNewItem from '@/components/FormNewItem'
import ListItems from '@/components/ListItems'
import { FormSellItem } from '@/components/FormSellItem'
import { ACTION } from 'next/dist/client/components/app-router-headers'

const ListPage = ({params}: {params: {listName: string}}) => {

  const initiateItems = () => { // Funktion som returnerar lista av listor
    const localValue = localStorage.getItem(params.listName.toUpperCase()) // Hämtar lista från "LISTS-LS" i local storage
    if(localValue === null || localValue === undefined) return []
    else return JSON.parse(localValue)
  }

                            //  ---=== HOOKS ===---

  const [sellModalOpen, setSellModalOpen] = useState(false);
  const [currentId, setCurrentId] = useState("");
  const [isSortedByDescending, setIsSortedByDescending] = useState(false);
  
  const [items, dispatch] = useReducer(reducer, [], initiateItems  );

  useEffect(() => { // Utför funktionen varje gång propertyn i andra argumentet ändras (Vilket är [items] i detta fall)
    localStorage.setItem(params.listName.toUpperCase(), JSON.stringify(items)) // Tar items och sparar somen Json-string i local storage med namn ITEMS
  }, [items, params.listName])


                              //  ---=== FUNCTIONS ===---
                              
                              
  function reducer(items: any, action: { type: any; payload: { name: string, id: string, price: number, owners: number, priceSold: number } }) {  
    let isSortet = false  
    switch(action.type) {

      case ACTIONS.ADD_TO_LIST:
        if( items.find( (list: { name: string }) => list.name === action.payload.name ))   
          { return [...items] }
        else 
          return [...items, newItem(action.payload.name, action.payload.price, action.payload.owners)]

      case ACTIONS.DELETE_FROM_LIST:
        return items.filter((item: { id: string }) => item.id !== action.payload.id)  

      case ACTIONS.SELL_ITEM:
        setSellModalOpen(!sellModalOpen)
        var index = items.findIndex((obj: { id: string }) => obj.id === action.payload.id);
        items[index].priceSold = action.payload.priceSold
        items[index].dateSold = Date.now()
        items[index].paid = (items[index].price - action.payload.priceSold) / items[index].owners
        setCurrentId("")
        return [...items]  
          
      case ACTIONS.SELL_MODAL:
        setCurrentId(action.payload.id)
        setSellModalOpen(!sellModalOpen)   
        return [...items]   
        
      case ACTIONS.SORT_LIST:
          setIsSortedByDescending(!isSortedByDescending)
          return [...items].sort( (a: { [x: string]: number }, b: { [x: string]: number }) => {
              if(isSortedByDescending === true) return a[action.payload.name] > b[action.payload.name] ? 1 : -1;
              else return a[action.payload.name] < b[action.payload.name] ? 1 : -1;
            }
          );

      default: return [...items]
    }
  }



  function newItem(name: string, price: number, owners: number) {
    return { id: crypto.randomUUID(), name: name, price: price, dateBought: Date.now(), owners: owners, paid: (price/owners)}
  }

  function calculateTotalPaid() {
    var totalPaid = 0;

    items.map((item: any) => {
      totalPaid = totalPaid + item.paid
    })
    return -totalPaid;
  }

  const callSortItems = (sortBy: string) => {
    dispatch({ type: ACTIONS.SORT_LIST, payload: { id: '', name: sortBy, price: 0, owners: 0, priceSold: 0 } });
};



  return (
      <>
        <h1>{params.listName}</h1>
        <br></br>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-3 py-4">
                  <button onClick={() => callSortItems('name')}>Name</button>
                </th>
                <th scope="col" className="px-3 py-4">
                  <button onClick={() => callSortItems('price')}>Price</button>
                </th>
                  <th scope="col" className="px-3 py-4">
                  <button onClick={() => callSortItems('dateBought')}>Bought</button>
                  </th>
                  <th scope="col" className="px-3 py-4">
                      <button onClick={() => callSortItems('owners')}>Owners</button>
                  </th>
                  <th scope="col" className="px-3 py-4">
                    <button onClick={() => callSortItems('priceSold')}>Sold</button>       
                  </th>
                  <th scope="col" className="px-3 py-4">  
                    <button onClick={() => callSortItems('dateSold')}>Sold</button>       
                  </th>
                  <th scope="col" className="px-3 py-4">
                    <button onClick={() => callSortItems('paid')}>Paid</button>           
                  </th>
                  <th scope="col" className="px-3 py-4">    
                    {calculateTotalPaid() > 0 && <p style={{color: "green"}}>Tot: {calculateTotalPaid().toFixed(0)}</p> || <p style={{color: "red"}}>Tot: {calculateTotalPaid().toFixed(0)}</p>}     
                  </th>  
              </tr>
            </thead>
            <tbody>
              {items === undefined || items.length < 1 ? 
                <p>No Lists</p> 
                : 
                items.map((item: any) => {
                return <>
                  <ListItems dispatch={dispatch} item={item}/>
                </>
              })}
            </tbody>
          </table>
        </div>
        <br />
        <FormNewItem dispatch={dispatch}/>
        <div className={`bg-slate-600/90 w-full flex justify-center items-center h-dvh ${sellModalOpen ? 'fixed' : 'hidden'}`}>
        <FormSellItem dispatch={dispatch} itemId={currentId}/>
        </div> 
      </>
    )
}

export default ListPage
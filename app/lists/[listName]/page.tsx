'use client'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {AddItemForm} from "../../../components/AddItemForm"
import { ProductRow } from '@/components/ProductRow'
import { IProduct } from '@/app/interfaces'

const ListPage = ({params}: {params: {listName: string}}) => {

                  //  ---=== HOOKS ===---

  const [product, setProduct] = useState(() => { // Initial värde är en funktion
    const localValue = localStorage.getItem(params.listName.toUpperCase())
    if(localValue == null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => { // Utför funktionen varje gång propertyn i andra argumentet ändras (Vilket är [lists] i detta fall)
    localStorage.setItem(params.listName.toUpperCase(), JSON.stringify(product)) // Tar lists och sparar somen Json-string i local storage med namn LIST
  }, [params.listName, product])


                              //  ---=== FUNCTIONS ===---

  function addItem(title: string, priceBought: number, priceSold: number, owners: number) { // dateBought: Date, dateSold: Date
    setProduct((currentValues: any) => {   // -   "setLists(currentLists => {"   - i vanlig React

      const dateBought = Date.now()
      
      return [
        ...currentValues, // Tar arrayen med listor och lägger till ett objekt som ser ut som det på nästa rad
        {id: crypto.randomUUID(), title, priceBought, priceSold, owners, dateBought }, // Alla propps som nya list objektet ska ha
      ]
    })
  }

  function deleteProduct(id: string) {
    setProduct((currentProducts: any[]) => { // Sätter lists till vad som returnas  -     "setLists(currentLists => {"     - i vanliga React
      return currentProducts.filter(item => item.id !== id) //Returnar nuvarande lista men med filter som säger alla items där list.id inte är id
    } )
  }

  
    return (
      <>
        <h1>{params.listName}</h1>
        <br></br>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-3 py-4">
                  Product name
                </th>
                <th scope="col" className="px-3 py-4">
                  Price
                </th>
                  <th scope="col" className="px-3 py-4">
                      Owners
                  </th>
                  <th scope="col" className="px-3 py-4">
                      Price/
                  </th>
                  <th scope="col" className="px-3 py-4">
                      Bought
                  </th>
                  <th scope="col" className="px-3 py-4">
                      Price S
                  </th>
                  <th scope="col" className="px-3 py-4">
                      Sold
                  </th>
                  <th scope="col" className="px-3 py-4">                      
                  </th>
              </tr>
            </thead>
            <tbody>
              {product.map((item: IProduct) => {
                return <>
                  <ProductRow product={item} deleteProduct={deleteProduct}/>
                </>
              })} 
            </tbody>
          </table>
        </div>
        <br></br>
        <AddItemForm func={addItem}/>
      </>
    )
}

export default ListPage
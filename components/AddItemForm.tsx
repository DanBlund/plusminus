'use client'
import { useState } from "react"
import ButtonBig from "./ButtonBig"
import {IAddItemForm} from '../app/interfaces' // Använder interface i TYPESCRIPT för att kunna skicka in props

export const AddItemForm: React.FC<IAddItemForm> = ({func}) => { // Så här måste vi skriva för att ta emot props i TYPESCRIPT
    const [newItemName, setNewItemName] = useState("") // Sista tomma strängen är startvärdet för useState hooken
    const [newItemBought, setNewItemBought] = useState(0)
    const [newItemSold, setNewItemSold] = useState(0)
    const [newItemOwners, setNewItemOwners] = useState(1)

    // function handleSubmit(e: { preventDefault: () => void }) {   // Vanlig React
    function handleSubmit(e: { preventDefault: () => void }) {      // TypeScript

        e.preventDefault() //Prevent page from refreshing

        if (newItemName === "") return //Hoppar ur om namnet är tomt
        if (newItemOwners < 1) return
        
          func(newItemName, newItemBought, newItemSold, newItemOwners)

        setNewItemName(""), setNewItemBought(0), setNewItemSold(0), setNewItemOwners(1)
      }

    return (
        <form className="w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}> {/* Callar hadleSubmit funktionen ovan */}
        <h1>Add New Item</h1>
            <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='itemName'>Item Name</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={newItemName}  //Value vär är samma som newList variabeln i useState hooken ovanför
                        onChange={e => setNewItemName(e.target.value)} // e = event object. Sätter newList variabel till värdet efter varje knapptryckning
                        placeholder="New List Name"
                        type="text" id='itemName' />
            </div>
            <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='itemBougt'>Price</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id='itemBougt' type='number'
                        value={newItemBought}  //Value vär är samma som newList variabeln i useState hooken ovanför
                        onChange={e => setNewItemBought(Number(e.target.value))} // e = event object. Sätter newList variabel till värdet efter varje knapptryckning
                        placeholder="Price"/>
            </div>
            <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='itemOwners'>Owners</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id='itemOwners' type='number'
                        value={newItemOwners}  //Value vär är samma som newList variabeln i useState hooken ovanför
                        onChange={e => setNewItemOwners(Number(e.target.value))} // e = event object. Sätter newList variabel till värdet efter varje knapptryckning
                        placeholder="Price"/>
            </div>
            <br/>
            <ButtonBig text={"Add"}/>
        </form>
    )
}


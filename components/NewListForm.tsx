'use client'
import { useState } from "react"
import ButtonBig from "./ButtonBig"
import {INewListForm} from '../app/interfaces' // Använder interface i TYPESCRIPT för att kunna skicka in props

export const NewListForm: React.FC<INewListForm> = ({func}) => { // Så här måste vi skriva för att ta emot props i TYPESCRIPT
    const [newListName, setNewListName] = useState("") // Sista tomma strängen är startvärdet för useState hooken

    // function handleSubmit(e: { preventDefault: () => void }) {   // Vanlig React
    function handleSubmit(e: { preventDefault: () => void }) {      // TypeScript

        e.preventDefault() //Prevent page from refreshing

        if (newListName === "") return //Hoppar ur om namnet är tomt

        func(newListName)

        setNewListName("")
      }

    return (
        <form className="w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}> {/* Callar hadleSubmit funktionen ovan */}
            <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='item'>New List</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={newListName}  //Value vär är samma som newList variabeln i useState hooken ovanför
                        onChange={e => setNewListName(e.target.value)} // e = event object. Sätter newList variabel till värdet efter varje knapptryckning
                        placeholder="New List Name"
                        type="text" id='item' />
            </div>
            <br/>
            <ButtonBig text={"Add"}/>
        </form>
    )
}


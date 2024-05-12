'use client'
import { useState } from "react"
import ButtonBig from "./ButtonBig"

export function NewListForm({addListPropp}) { // Istället för propps destructar vi till {addListPropp}

    const [newListName, setNewListName] = useState("") // Sista tomma strängen är startvärdet för useState hooken

    function handleSubmit(e) {
        e.preventDefault() //Prevent page from refreshing
        if (newListName === "") return //Hoppar ur om namnet är tomt

        addListPropp(newListName) // Istället för propps.addListPropp kan vi ta bort propps. för den är destructad

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
            {/* <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Add New List</button> */}
            <ButtonBig text={"Add"}/>
        </form>
    )
}


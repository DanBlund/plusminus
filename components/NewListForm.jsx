'use client'
import { useState } from "react"

export function NewListForm({addListPropp}) { // Istället för propps destructar vi till {addListPropp}

    const [newListName, setNewListName] = useState("") // Sista tomma strängen är startvärdet för useState hooken

    function handleSubmit(e) {
        e.preventDefault() //Prevent page from refreshing
        if (newListName === "") return //Hoppar ur om namnet är tomt

        addListPropp(newListName) // Istället för propps.addListPropp kan vi ta bort propps. för den är destructad

        setNewListName("")
      }

    return (
        <form onSubmit={handleSubmit}> {/* Callar hadleSubmit funktionen ovan */}
            <div>
                <label htmlFor='item'>New List</label>
                <input value={newListName}  //Value vär är samma som newList variabeln i useState hooken ovanför
                        onChange={e => setNewListName(e.target.value)} // e = event object. Sätter newList variabel till värdet efter varje knapptryckning
                        type="text" id='item' />
            </div>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Add New List</button>
        </form>
    )
}


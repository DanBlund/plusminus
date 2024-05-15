'use client'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const ListPage = ({params}: {params: {listName: string}}) => {

                  //  ---=== HOOKS ===---

  const [values, setValues] = useState(() => { // Initial värde är en funktion
    const localValue = localStorage.getItem("VALUE")
    if(localValue == null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => { // Utför funktionen varje gång propertyn i andra argumentet ändras (Vilket är [lists] i detta fall)
    localStorage.setItem("VALUE", JSON.stringify(values)) // Tar lists och sparar somen Json-string i local storage med namn LIST
  }, [values])


                              //  ---=== FUNCTIONS ===---



    return (
      <>
          <h1>{params.listName}</h1>
      </>
    )
}

export default ListPage
'use client'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { IProduct } from '@/app/interfaces'

const ListPage = ({params}: {params: {listName: string}}) => {




                            //  ---=== HOOKS ===---

  const [sellModalOpen, setSellModalOpen] = useState(false);
  // const [priceSold, setPriceSold] = useState(0)
  const [currentItem, setCurrentItem] = useState("")


                              //  ---=== FUNCTIONS ===---


  function switchSellModal(id: string) { // dateBought: Date, dateSold: Date
    setCurrentItem(id)
    setSellModalOpen(!sellModalOpen)
    return 
  }







  return (
      <>
        <h1>{params.listName}</h1>
      </>
    )
}

export default ListPage
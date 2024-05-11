import React from 'react'

const page = ({params}: {params: {listName: string}}) => {
  return (
    <>
        <div>{params.listName}</div>
        <h1>hej {params.listName}</h1>
    </>
  )
}

export default page
import React from 'react'
import { useCount, useSearch } from '../store'


export const Card = () => {
  const [state,setState] = useCount()
  const [searchItem,setSearchItem]=useSearch('');
  
  return (
    <div className="flex flex-col gap-5 justify-center items-center w-80 h-60 rounded-xl bg-purple-400 ">
        <div className="text-4xl font-bold">Add one</div>
        <button className="bg-indigo-800 text-white rounded-md flex text-center p-2 " onClick={()=> setState((e)=>e + 1)}> Click me: {state}</button>
        <div className="flex justify-center items-start flex-col gap-1 text-lg font-medium">
        <label htmlFor="search">Search for {JSON.stringify(searchItem).slice(1,-1)}</label>
        <input className="rounded-lg p-2" placeholder="Search for a pokemon" type="text" onChange={e=>setSearchItem(e.target.value)} />
       </div>
    </div>
  )
}

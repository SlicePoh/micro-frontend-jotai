import React from 'react'
import {useCount}from 'remoteApp/store'

export const Cardtwo = () => {
  const [state,setState] = useCount()
  return (
    <div className="flex flex-col gap-5 justify-center items-center w-80 h-60 rounded-xl bg-rose-400 ">
        <div className="text-4xl font-bold">Subtract one</div>
        <button className="bg-indigo-800 text-white rounded-md flex text-center p-2 " onClick={()=> setState((e)=>e - 2)}> Click me: {state}</button>
    </div>
  )
}

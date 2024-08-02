import React from 'react'
import { useRef, useState } from 'react'
import { Cardtwo } from '../components/Cardtwo'
import { PokeCard } from '../components/PokeCard'


export const Home = () => {
    const [pokename, setPokename] = useState('')
    const [open, setOpen] = useState(false)
    const inputRef = useRef();
    const handleOpen = () => {
        setOpen(!open);
        console.log("altered", open);
    }
    const handleClick = (e) => {
        e.preventDefault();
        const val = inputRef.current.value;
        console.log(val);
        setPokename(val);
        setOpen(true);
    }
    return (
        <>
            <div className="flex justify-center items-center min-h-screen gap-5">
                <div className="flex flex-col gap-5">
                    <input ref={inputRef} className="p-2 border-[1px] border-slate-300 rounded-md" type="text" placeholder="Enter the pokemon name" />
                    <button onClick={handleClick} className="bg-lime-500 text-white rounded-md flex text-center p-2 ">Submit</button>
                </div>
                {(pokename && open) &&
                    <PokeCard pokename={pokename} handleOpen={handleOpen} />
                }

                <Cardtwo />
            </div>
        </>
    )
}

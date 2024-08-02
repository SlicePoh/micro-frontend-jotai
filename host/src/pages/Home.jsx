import { Card } from 'remoteApp/Card'
import { Cardtwo } from 'remotetwoApp/Cardtwo'
import { Pokedex } from 'remoteApp/Pokedex'
import React, { useState } from 'react'
import {types} from 'remotetwoApp/Types'
import {PokeCard} from 'remotetwoApp/PokeCard'
import {useSearch} from 'remoteApp/store'


export const Home = () => {
    const [searchItem,setSearchItem]=useSearch('');
    const [generate, setGenerate] = useState(false)
    const handlePokemon = () => {
      setGenerate(!generate);
    }
    return (
        <>
            {
                (searchItem && generate) &&
                <PokeCard handleOpen={handlePokemon} pokename={searchItem} />
            }
            <div className="flex flex-col gap-5 justify-center items-center min-h-screen bg-emerald-400">
                <div className="text-6xl font-bold mt-20"> HOST </div>
                <button className="bg-indigo-800 text-white text-lg rounded-md flex text-center p-2 " onClick={handlePokemon}>Generate</button>
                <div className="flex gap-5">
                    <Card />
                    <Cardtwo />
                </div>
                <Pokedex />
            </div>
        </>
    )
}

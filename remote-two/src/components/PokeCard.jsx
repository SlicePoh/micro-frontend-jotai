import React, { useEffect, useState } from 'react';
// import { Emoji, EmojiStyle } from 'emoji-picker-react';
import { RxCross2 } from "react-icons/rx";
import { types } from '../assets/Poketypes';

export const PokeCard = ({ handleOpen, pokename }) => {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);

    const getTypeInfo = (type) => {
        const foundType = types.filter(t => t.type === type);
        return foundType.length > 0 ? foundType[0] : { type: "unknown", color: "#FFFFFF" }; // Default to unknown if type not found
    }

    let pokenam = pokename.toLowerCase();
    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokenam}`).then(response => response.json());
                setPokemon(response);
                console.log(pokemon);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching Pokémon data:', err);
            }
        };

        fetchPokemonData();
    }, [pokename]);

    return (
        <div className="z-40 fixed flex flex-col justify-start items-center gap-3 w-[620px] h-auto bg-pink-900 text-white p-5 rounded-2xl">
            {loading ? (
                <div className="">loading...</div>
            ) : (
                <>
                    <div className="w-full flex justify-end">
                        <RxCross2 className="text-2xl" onClick={handleOpen} />
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <div className="text-4xl font-bold capitalize">{pokemon.name}</div>
                        <div className='flex gap-3'>
                            {pokemon.types.map((typeData, index) => (
                                <div key={index} style={{ backgroundColor: getTypeInfo(typeData.type.name).color }} className="flex justify-between items-center h-fit text-black rounded-full pl-2 gap-2">
                                    <div className="capitalize font-medium w-3/5">{typeData.type.name}</div>
                                    <div className="bg-gray-900 w-2/5 h-full pr-1 rounded-r-full">
                                        {getTypeInfo(typeData.type.name).icon}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className="flex">
                        <img className="w-60 h-auto " src={pokemon.sprites.front_default} alt="pokemon_front_default" />
                        {pokemon.sprites.back_default &&
                            <img className="w-60 h-auto " src={pokemon.sprites.back_default} alt="pokemon_back_default" />
                        }
                        {pokemon.sprites.front_shiny &&
                            <img className="w-60 h-auto " src={pokemon.sprites.front_shiny} alt="pokemon_front_shiny" />
                        }
                        {pokemon.sprites.back_shiny &&
                            <img className="w-60 h-auto " src={pokemon.sprites.back_shiny} alt="pokemon_back_shiny" />
                        }
                    </div>

                    <div className="flex flex-col items-center justify-center w-full text-2xl">
                        <div className="flex justify-between w-full font-">
                            <div className="">Weight- {pokemon.weight}</div>
                            <div className="">Height- {pokemon.height}</div>

                        </div>

                        <div className="flex items-center justify-center text-xl gap-4">
                            <div className="bg-red-500 flex items-center justify-center text-center font-semibold p-1 rounded-xl border-4 border-gray-300">  Abilities </div>
                            {pokemon.abilities.map((abi, i) => (
                                <div style={{ color: "#00000" }} key={i} className="gap-2 text-sm italic capitalize">
                                    {abi.ability.name}
                                </div>
                            ))}
                        </div>
                        <div className=""></div>
                        <div className=""></div>
                    </div>
                    <div className="flex flex-col items-center justify-center flex-wrap gap-5 w-full">
                        <div className="font-bold text-2xl">Moves-</div>
                        <div className="flex items-center justify-center gap-5 flex-wrap">
                            {pokemon.moves.slice(0, 10).map((move, i) => (
                                <div className="capitalize font-medium text-lg" key={i}>
                                    {i + 1}: {move.move.name}
                                </div>
                            ))
                            }
                        </div>
                    </div>
                    <div className="flex w-full justify-between flex-col text-base font-sans p-3 border-[1px] border-blue-600 rounded-md font-medium capitalize">
                        <div className="flex justify-between">
                            <div className="uppercase">{pokemon.stats[0].stat.name} - {pokemon.stats[0].base_stat}</div>
                            <div className="">{pokemon.stats[1].stat.name} - {pokemon.stats[1].base_stat}</div>

                        </div>
                        <div className="flex justify-between">
                            <div className="">{pokemon.stats[2].stat.name} - {pokemon.stats[2].base_stat}</div>
                            <div className="">special attack - {pokemon.stats[3].base_stat}</div>
                        </div>
                        <div className="flex justify-between">
                            <div className="">special defense - {pokemon.stats[4].base_stat}</div>
                            <div className="">{pokemon.stats[5].stat.name} - {pokemon.stats[5].base_stat}</div>
                        </div>

                    </div>

                </>
            )
            }
        </div>
    )
}

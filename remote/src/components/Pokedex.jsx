import React, { useState, useEffect } from 'react'
import { useCount, useSearch } from '../store'

export const Pokedex = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchItem, setSearchItem] = useSearch('');


    const [count, setCount] = useCount()
    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const response = await Promise.all(
                    Array.from({ length: count }, (_, index) =>
                        fetch(`https://pokeapi.co/api/v2/pokemon/${index + 1}`).then(response => response.json())
                    )
                );

                setPokemonData(response);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching Pokémon data:', error);
            }
        };

        fetchPokemonData();
    }, [count, searchItem]);

    let filtered = pokemonData.filter(pokemon => pokemon.name.includes(searchItem));
    console.log(filtered);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="w-11/12 flex flex-col justify-center items-center">
            <div className="text-5xl font-bold my-10">Pokémon List</div>
            <div className="flex flex-wrap w-full gap-5 justify-center items-center">
                {filtered.map(pokemon => (
                    <div className="flex flex-col justify-center items-center font-serif  w-60 h-auto rounded-lg overflow-hidden bg-orange-300 border-8 border-orange-500 p-3" key={pokemon.id}>
                        <div className="text-xl font-bold capitalize "> {pokemon.name}</div>
                        <div className="flex">
                            <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
                            <img src={pokemon.sprites.back_default} alt={pokemon.name} />
                        </div>
                        <div className="flex w-full justify-between flex-col text-xs font-sans p-3 border-[1px] border-black rounded-md font-medium">
                            <div className="flex justify-between">
                                <div className="">{pokemon.stats[0].stat.name} - {pokemon.stats[0].base_stat}</div>
                                <div className="">{pokemon.stats[1].stat.name} - {pokemon.stats[1].base_stat}</div>

                            </div>
                            <div className="flex justify-between">
                                <div className="">{pokemon.stats[2].stat.name} - {pokemon.stats[2].base_stat}</div>
                                <div className="">sp-attack - {pokemon.stats[3].base_stat}</div>
                            </div>
                            <div className="flex justify-between">
                                <div className="">sp-defense - {pokemon.stats[4].base_stat}</div>
                                <div className="">{pokemon.stats[5].stat.name} - {pokemon.stats[5].base_stat}</div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

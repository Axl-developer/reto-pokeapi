import { useContext, useEffect, useState } from 'react'
import { getRecordPokemon } from '../../infra/providers/getRecordPokemon';
import { RecordPokemon } from '../../domain/models/Record';
import { ContextPokemon } from '../../infra/context/pokemonContext';

export const useGetPokemons = (limit: string, offset: string) => {
    const  {setterValue}= useContext(ContextPokemon)
    const [data, setData] = useState<RecordPokemon>({
        count: 0,
        type:[]
    })

    async function getData() {
        const pokemons = await getRecordPokemon({limit,offset});
        setData(pokemons);
        setterValue({
            count: pokemons.count,
            pokemons:pokemons.type
        })
    } 

    useEffect(() => {
        getData()
    }, [limit,offset])
    
    return data.type
}

import { useEffect, useState } from 'react'
import { getInfoPokemon } from '../../infra/providers';
import { Pokemon } from '../../domain/models';

export const useGetInfo = (param: string) => {
    const [data, setData] = useState<Pokemon>({
        name: '',
        graphic: [],
        images:{
            generic:'',
            shiny:'',
        },
        types:[],
        varients:[]
    })

    async function getData() {
        const pokemons = await getInfoPokemon(param);
        setData(pokemons);
    } 

    useEffect(() => {
        getData()
    }, [param])
    
    return data
}

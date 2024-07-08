import { useEffect, useState } from 'react'
import { getSpeciesPokemon } from '../../infra/providers';
import { item, } from '../../domain/models';


export const useGetSpecies = (param: string) => {
    const [data, setData] = useState<item[]>([{ name:'', url:'' }])

    async function getData() {
        const species = await getSpeciesPokemon(param);
        setData(species);
    } 

    useEffect(() => {
        getData()
    }, [param])
    
    return data
}

import { useEffect, useState } from 'react'
import { getTypesPokemon } from '../../infra/providers';
import { item, } from '../../domain/models';


export const useGetTypes = () => {
    const [types, setTypes] = useState<item[]>([{ name:'', url:'' }])

    async function getData() {
        const species = await getTypesPokemon();
        setTypes(species.types);
    } 

    useEffect(() => {
        getData()
    }, [])
    
    return types
}

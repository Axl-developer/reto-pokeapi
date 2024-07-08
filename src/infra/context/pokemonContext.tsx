import { createContext, useCallback, useMemo, useState } from "react";
export interface contextPoke{
  filter: {
    inputSearch: string;
    type: string;
    range: {
      limit: string;
      offset:string
    },
    count: number;
    pokemons: Array<{
      name: string;
      url:string
    }>
  },
  setterValue:<T>(value:T)=>void
}
const INITIAL_VALUE = {
    inputSearch: '',
    type: '',
    range: {
      limit: '11',
      offset: '0'
    },
    count:0,
    pokemons:[]
}

export const ContextPokemon = createContext<contextPoke>({
  filter:INITIAL_VALUE,
  setterValue:()=>{}
});



export const ProviderPokemon = ({children}:{children:React.ReactNode}) => {
  const [filterPoke,setFilterPoke] = useState(INITIAL_VALUE);

  const setterValue = useCallback(
     <T,>(value:T) => {
    setFilterPoke({
      ...filterPoke,
      ...value
    })
  },
    [filterPoke],
  )
  
  const dataMemo=useMemo(() => ({
    filter: filterPoke,
    setterValue
  }), [filterPoke,setterValue])
  return <ContextPokemon.Provider value={{
    ...dataMemo
  }}>
    {children}
  </ContextPokemon.Provider>
  
}
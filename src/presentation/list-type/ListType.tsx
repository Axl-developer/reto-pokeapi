import { useContext, useState } from 'react';
import { generateID, getColors, getNumberParam } from '../../utils'
import { useGetTypes } from '../hook';
import { PokeballSpinner } from '../pokeball-spinner/PokeballSpinner';
import { Tag } from '../tag/Tag';
import { getRecordPokemon, getTypePokemon } from '../../infra/providers';
import { ContextPokemon } from '../../infra/context';

export const ListType = () => {

  const  {setterValue}= useContext(ContextPokemon)
  const [currenType, setCurrenType] = useState('')

  const types = useGetTypes()
  const totalTypes = [ { name:'All', url:'' },...types]

    if(types === null) {
        return <PokeballSpinner isAnimated/>
    }

    const getData = async(type: string) => {

      if(type){
        const pokemons = await getTypePokemon(type);
        setterValue({
            pokemons:pokemons.listPokemon,
            type: pokemons.name
        })
      }else{
        const pokemons = await getRecordPokemon({offset:'0',limit:'20'});
        setterValue({
            pokemons:pokemons.type,
            type:''
        })
      }
      
    }
    
    const handleChangeType = async(name: string,type: string) => {
      if(currenType !== name) {
        setCurrenType(name)
        getData(type)
      }
    }

  return (
    <div>
      {
        totalTypes.map(
          type => (
            <div key={generateID()} onClick={()=> handleChangeType(type.name, getNumberParam(type.url))}>
              <Tag text={type.name} type={currenType === type.name ?getColors(type.name) :'default'}/>
            </div>
          )
        )
      
      }
    </div>
  )
}

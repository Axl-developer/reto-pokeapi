import './styles.scss'
import { useContext, useState } from 'react';
import { useGetPokemons } from '../hook/useGetPokemons';
import { PokeballSpinner } from '../pokeball-spinner/PokeballSpinner'
import { contextModal, ContextModal, contextPoke, ContextPokemon } from '../../infra/context';
import { Pagination } from '../pagination/Pagination';

export const ListPokemonsName = () => {
  const { filter } = useContext<contextPoke>(ContextPokemon)
  
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10
  })
  const { current, pageSize } = pagination
  const offset = pageSize * (current - 1)
  const pokemons = useGetPokemons(String(pageSize),String(offset))
  const listPokemons = filter.type.length === 0 ?pokemons :filter.pokemons;
  const { setterValue } = useContext<contextModal>(ContextModal)


  return (
    <div className='list__pokemons'>
      <div className='list__pokemons__constains'>
        <div className='list__pokemons__name'>
          {
            listPokemons.map( ({name}) => (
              <div key={name} className="pokemon__name">
                <div  onClick={() => setterValue({isOpen: true, name})} >
                  <PokeballSpinner isAnimated={false} />
                </div>
                {name}
              </div>
            ))
          }
        </div>
      </div>
      {
        filter.type.length === 0 &&
        <Pagination current={Number(pagination.current)} total={filter.count} pageSize={Number(pagination.pageSize)} handlePagination={setPagination} params={pagination}/>
      }
    </div>
  )
}

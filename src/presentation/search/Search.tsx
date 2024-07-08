
import './styles.scss'
import {  useContext, useState } from "react";
import { ContextPokemon, contextPoke } from '../../infra/context/pokemonContext';
import { item } from '../../domain/models/pokemon';
import { generateID } from '../../utils';
import { contextModal, ContextModal } from '../../infra/context';
import { NotFound } from '../not-found/NotFound';
 
const highLigthedText = (pokeName: string, value: string) => {
    
    const parts = pokeName.split(new RegExp(`(${value})`,'gi'))
    return (
        <span>
            {
                parts.map((part: string) => 
                    part.toLocaleLowerCase() === value.toLowerCase()
                    ? <strong key={generateID()}>{part}</strong>
                    : part
                )
            }
        </span>
    )
  }

export const Search = () => {
  const [textValue, setTextValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const {filter:{pokemons}} = useContext<contextPoke>(ContextPokemon)

  const changeValueInput = ({target}:React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(target.value)
  }

  const { setterValue } = useContext<contextModal>(ContextModal)

  const handleClick = (name: string) => {
    setterValue({isOpen: true, name})
    setTextValue(name)
  }

  return (
    <div className={`sensitive ${(isOpen) ? 'sensitive--open' :''}`}>
        <input
            autoComplete='off'
            className="sensitive__input"
            type="text"
            name="search"
            onChange={changeValueInput}
            onFocus={() => setIsOpen(true)}
            onBlur={() => setTimeout(() => setIsOpen(false), 221)}
            value={textValue}
            placeholder='Search your pokemon'
        />
      <div className='sensitive__content'>
        
          {isOpen && (
            textValue.trim.length !== 0 || pokemons.filter( poke => poke.name.includes(textValue)).length === 0
            ? <NotFound text='Pokemon not found'/>
            :
            <div className='sensitive__content__overflow'>
              <div className='sensitive__options'>
                {
                  pokemons.filter( poke => poke.name.includes(textValue)).map( (pokemon: item) => (
                    <div 
                      key={pokemon.name}
                      className={`sensitive__items `}
                      onClick={()=>handleClick(pokemon.name)}
                      >
                          {highLigthedText(pokemon.name,textValue)}
                      </div>
                    )
                  )
                }
              </div>
            </div>
            )}  
      </div>
    </div>
  );
};

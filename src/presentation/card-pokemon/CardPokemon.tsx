import "./styles.scss";
import { Radar } from "react-chartjs-2";
import { Chart,RadialLinearScale, PointElement, LineElement } from "chart.js";
import { useContext, useEffect, useState } from 'react';
import { getColors, getNumberParam } from "../../utils";
import { Tag } from "../tag/Tag";
import { PokeballSpinner } from "../pokeball-spinner/PokeballSpinner";
import { NotFound } from "../not-found/NotFound";
import { useGetInfo, useGetSpecies } from "../hook";
import { contextModal, ContextModal } from "../../infra/context";

Chart.register(RadialLinearScale, PointElement, LineElement);

export const CardPokemon = () => {

  const { modal } = useContext<contextModal>(ContextModal)

  const [param, setParam] = useState(modal.name)
  const info2 = useGetInfo(param)
  const variants = useGetSpecies(modal.name)

  

  const [isShiny, setIsShiny] = useState(false);

  useEffect(() => {
    const random = Math.random() * 3
  
    Math.floor(random) === 0
    ?setIsShiny(true)
    :setIsShiny(false)
    
  }, [])

  if(!info2.name.length){
    return <div className="containt__pokeball"> <PokeballSpinner isAnimated /> </div>
  }

  const format = info2.graphic.map( stat => stat.baseStat)
  const labels = info2.graphic.map( start => start.name)

  
  const dataTest = {
    labels,
    datasets: [
      {
        data: format,
        backgroundColor: 'rgba(255,99,132, 0.2)',
        borderColor: 'rgba(255,99,132, 1)',
        borderWidth: 1
      }
    ],
  }

  return (
    <div className={`cardPokemon is-${getColors(info2.types[0].name)}`}>
      <div className="cardPokemon__principal">
        <div className="cardPokemon__pokemon">
          <h1 className="cardPokemon__title">{info2.name.replace(/-/g,' ')} { isShiny && ' Shiny'}</h1>
          {
            ( !isShiny && info2.images.generic !== null) || ( isShiny && info2.images.shiny !== null)
            ? <figure className="cardPokemon__figure">
                <img src={isShiny ?info2.images.shiny :info2.images.generic} width={150} />
              </figure>
            : <div className="cardPokemon__not-found">
              <NotFound text="This pokemon doesn't have a photo!"/>
            </div>
          }  

        </div>

        <div className="cardPokemon__sidebar">
          <h2>Types</h2>
            <div className="cardPokemon__types">
              {
                info2.types.map(
                  (type) => <Tag key={type.name} text={type.name} type={getColors(type.name)}></Tag>
                )
              }
            </div>

            <h2>Stats</h2>
            <Radar data={dataTest} />
        </div>
      </div>
        {
          variants[0].name.length !== 0 &&
          <div className="cardPokemon__info">
            <div>
              <h2>Select Variant</h2>
              <div className="cardPokemon__types">
                {
                  variants.map(
                    ({ name, url }) => <div className="cardPokemon__variants" key={name} onClick={() => setParam(getNumberParam(url))}> {name.replace(/-/g,' ')} </div>
                  )
                }
              </div>
            </div>
          </div>
        }
    </div>
  );
};

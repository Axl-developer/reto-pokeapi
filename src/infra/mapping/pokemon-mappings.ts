import { RecordPokemonByType } from "../../domain/models"
import { RecordPokemon } from "../../domain/models/Record"
import { item, Pokemon } from "../../domain/models/pokemon"
import { TypePokemon } from "../../domain/models/type-pokemon"
import { TypesPokemon } from "../../domain/models/types-pokemons"
import { IResponsePokemon } from "../interface/IResponsePokemon"
import { IResponseSpeciePokemon } from "../interface/IResponseSpeciePokemon"
import { IResponseTypePokemon, IResponseTypes } from "../interface/IResponseTypePokemon"
import { IResponseRecord } from "../interface/IresponseRecord"

export const mappingResponseTypesPokemon = (response:IResponseTypes):TypesPokemon => ({
    types: response.results
})

export const mappingResponseTypePokemon = (response:IResponseTypePokemon):TypePokemon => ({
    name: response.name,
    listPokemon: response.pokemon.map( ({pokemon} )=> ({ name: pokemon.name, url:pokemon.url}))
})

export const mappingResponsePokemon = (response:IResponsePokemon):Pokemon => ({
    name: response.name,
    images: {
        generic: response.sprites.other.home.front_default,
        shiny:response.sprites.other.home.front_shiny
    },
    graphic: response.stats.map(elm => {
        return {
            name:elm.stat.name,
            baseStat:elm.base_stat
        }
    }),
    types: response.types.map(elm => ({
        name: elm.type.name,
        url:elm.type.url
    }))
})

export const mappingSpecies = (response: IResponseSpeciePokemon): Array<item> => response.varieties.map(elem => ({
        name: elem.pokemon.name,
        url: elem.pokemon.url
    }))

export const mappingRecord = (response: IResponseRecord): RecordPokemon => {
    return {
        count: response.count,
        type:response.results
    }
}

export const mappingRecordByType = (response: IResponseRecord): RecordPokemonByType => {
    return {
        type:response.results
    }
}
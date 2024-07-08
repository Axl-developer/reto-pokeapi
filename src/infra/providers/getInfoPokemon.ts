import { IResponsePokemon } from "../interface/IResponsePokemon";
import { get } from "../lib/fetch";
import { mappingResponsePokemon } from "../mapping/pokemon-mappings";

export const getInfoPokemon = async (name:string) => {
    const response = await get<IResponsePokemon>(`pokemon/${name}`);
    return mappingResponsePokemon(response);
}
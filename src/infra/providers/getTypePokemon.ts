import { IResponseTypePokemon } from "../interface/IResponseTypePokemon";
import { get } from "../lib/fetch";
import { mappingResponseTypePokemon } from "../mapping/pokemon-mappings";

export const getTypePokemon = async (number='') => {
    const response = await get<IResponseTypePokemon>(`type/${number}`);
    return mappingResponseTypePokemon(response);
}
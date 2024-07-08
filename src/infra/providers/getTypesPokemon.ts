import { IResponseTypes } from "../interface/IResponseTypePokemon";
import { get } from "../lib/fetch";
import { mappingResponseTypesPokemon } from "../mapping/pokemon-mappings";

export const getTypesPokemon = async () => {
    const response = await get<IResponseTypes>('type');
    return mappingResponseTypesPokemon(response);
}
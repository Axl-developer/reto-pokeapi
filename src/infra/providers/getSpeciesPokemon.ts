import { IResponseSpeciePokemon } from "../interface/IResponseSpeciePokemon";
import { get } from "../lib/fetch";
import { mappingSpecies } from "../mapping/pokemon-mappings";

export const getSpeciesPokemon = async (namePokemon='') => {
    const response = await get<IResponseSpeciePokemon>(`pokemon-species/${namePokemon}`);
    return mappingSpecies(response);
}
import { IResponseRecord } from "../interface/IresponseRecord";
import { get } from "../lib/fetch";
import { mappingRecord } from "../mapping/pokemon-mappings";

export const getRecordPokemon = async (filters: { offset: string; limit:string}) => {
    const response = await get<IResponseRecord>('pokemon', filters);
    return mappingRecord(response);
}
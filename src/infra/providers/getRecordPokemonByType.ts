import { IResponseRecord } from "../interface/IresponseRecord";
import { get } from "../lib/fetch";
import { mappingRecordByType } from "../mapping/pokemon-mappings";

export const getRecordPokemonByType = async (type: string) => {
    const response = await get<IResponseRecord>(`pokemon/${type}`);
    return mappingRecordByType(response);
}
import { item, Pokemon } from "./pokemon";

export interface TypePokemon{
    name: string;
    listPokemon: Array<item & Partial<Pokemon>>;
    count?:number
}
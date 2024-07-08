

export interface PokemonsResults {
  count: number;
  next: null;
  previous: null;
  results: [];
}

export interface PokemonItem {
  name: string;
  url: string;
}

export interface TypeResponse {
  pokemon: {Pokemon: PokemonItem}[];
}

export interface TypesResponse {
  results: PokemonItem[];
}

export interface TypeVariants {
  varieties: {pokemon: PokemonItem}[];
}


export enum Colors {
  Gray = 'gray',
  Green = 'green',
  Plant = 'plant',
  Blue = 'blue',
  DarkBlue = 'blue-dark',
  GrayBlue = 'blue-gray',
  RealBlue = 'blue-real',
  Sky = 'sky',
  SkyBlue = 'skyblue',
  Yellow = 'yellow',
  Brown = 'brown',
  Purple = 'purple',
  Mustard = 'mustard',
  DarkMustard = 'mustard-dark',
  Orange = 'orange',
  Pink = 'pink',
  Cyan = 'cyan',
  Dark = 'dark',
  LightPink = 'light-pink',
  Stellar = 'stellar'
}
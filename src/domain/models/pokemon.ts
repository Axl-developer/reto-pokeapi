export interface item{
    name: string;
    url:string
  }

export interface Pokemon {
  name: string;
  images: {
    generic: string;
    shiny: string;
  };
  types: Array<item>;
  graphic: Array<{
    name: string;
    baseStat: number;
  }>;
  varients?: Array<item>
}

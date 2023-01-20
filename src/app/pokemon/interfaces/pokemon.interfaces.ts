//Interfaces para la tabla
export interface ConsultaAllPokemons {
  count: number;
  next?: null;
  previous?: null;
  results: PokemonName[];
}

export interface PokemonName {
  name: string;
  url: string;
}

export interface Pokemon {
  numero:string,
  nombre:string,
  img:string,
  detailsURL:string,
}

//Interfaces para las Estadisticas
export interface ConsultaStats {
  height:number;
  stats: Stat[];
  types: Type[];
  weight: number;
  sprites: Sprites;
  name:string;
}

export interface Sprites {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
  other: Other;
}

export interface Other {
  official_artwork: OfficialArtwork;
}

export interface OfficialArtwork {
  front_default: string;
  front_shiny: string;
}

export interface Stat2 {
    name: string;
    url: string;
}

export interface Stat {
    base_stat: number;
    effort: number;
    stat: Stat2;
}

export interface Type2 {
    name: string;
    url: string;
}

export interface Type {
    slot: number;
    type: Type2;
}

export interface CleanStatsInterface {
  nombre:string;
  image:string;
  altura:number;
  hp:number;
  ataque:number;
  defensa:number;
  ataqueEspecial:number;
  defensaEspecial:number;
  velocidad:number;
  tipo1:string;
  tipo2:string;
  tipo3:string;
}
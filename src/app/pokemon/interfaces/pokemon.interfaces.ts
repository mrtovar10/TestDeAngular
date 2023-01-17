
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
  foto:string,
}
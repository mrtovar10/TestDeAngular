import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConsultaAllPokemons, Pokemon } from '../interfaces/pokemon.interfaces';
import {map} from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  
  private url:string = 'https://pokeapi.co/api/v2';
  
  constructor(private http:HttpClient) { }

  getAllPokemons():Observable<Pokemon[]> {
    return this.http.get<ConsultaAllPokemons>(`${this.url}/pokemon?limit=100000`)
    .pipe(
      map ( this.transforNamesInPokemons)
    )
  }

  private transforNamesInPokemons( resp:ConsultaAllPokemons):Pokemon[]{
    const pokemonlist:Pokemon[] = resp.results.map(
      element => {
        const id = element.url.split('/')[6];
        const foto = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
        return {
          numero:id,
          nombre:element.name,
          foto,
        }
      }
    )
    return pokemonlist
  }
}

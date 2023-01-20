import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConsultaAllPokemons, Pokemon,ConsultaStats, CleanStatsInterface } from '../interfaces/pokemon.interfaces';
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
        const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
        
        return {
          numero:id,
          nombre:element.name,
          img,
          detailsURL:element.url
        }
      }
    )
    return pokemonlist
  }

  getArrayNames():Observable<string[]> {
    return this.http.get<ConsultaAllPokemons>(`${this.url}/pokemon?limit=100000`)
    .pipe(
      map(this.transforNamesInArrayNames)
    )
  }

  private transforNamesInArrayNames(resp:ConsultaAllPokemons):string[]{
    const arrayNames:string[] = resp.results.map(
      element=> element.name
    )
    return arrayNames
  }

  getStats(id:string):Observable<CleanStatsInterface>{
    return this.http.get<ConsultaStats>(`${this.url}/pokemon/${id}/`)
    .pipe(
      map(this.cleanStats)
    )
  }

  private cleanStats(stats:ConsultaStats):CleanStatsInterface{
    return {
      nombre:stats.name,
      image:stats.sprites.front_default,
      altura:stats.height,
      hp:stats.stats[0].base_stat,
      ataque:stats.stats[1].base_stat,
      defensa:stats.stats[2].base_stat,
      ataqueEspecial:stats.stats[3].base_stat,
      defensaEspecial:stats.stats[4].base_stat,
      velocidad:stats.stats[5].base_stat,
      tipo1:stats.types[0]?.type.name,
      tipo2:stats.types[1]?.type.name,
      tipo3:stats.types[2]?.type.name,
    }
  }

  // getArrayByLetras(){
  //   this.getArrayNames()
  //   .subscribe(resp =>{
      
  //   })
  // }

}

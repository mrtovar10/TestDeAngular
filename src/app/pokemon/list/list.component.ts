import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.interfaces';
import { PokemonService } from '../services/pokemon.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  public pokemons:Pokemon[] = [];
  public page:number = 0;
  public search:string =''

  constructor(private pokemonService:PokemonService) {}
  ngOnInit(): void {
    this.pokemonService.getAllPokemons()
    .subscribe(resp =>{
      this.pokemons = resp;
    })
  }

  nextPage() {
    this.page += 10
  }

  previousPage() {
    if(this.page > 0) this.page -= 10
  }

  buscarPokemon(textoBuscado:string) {
    this.search = textoBuscado
    this.page = 0
  }
}

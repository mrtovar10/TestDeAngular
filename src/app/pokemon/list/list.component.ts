import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  constructor(private pokemonService:PokemonService) {}
  ngOnInit(): void {
    this.pokemonService.getAllPokemons()
    .subscribe(resp =>{
      console.log(resp)
    })
  }
}

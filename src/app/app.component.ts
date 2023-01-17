import { Component, OnInit } from '@angular/core';

interface List{
  nombrePokemon:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'PruebaAngular';
  public listPokemons: List[]=[];
  ngOnInit():void {
    this.listPokemons = [
      {nombrePokemon:'ElPikapi'},
      {nombrePokemon:'Charizarcox'},
      {nombrePokemon:'Vupix'},
      {nombrePokemon:'VamoaCalmano'},
      {nombrePokemon:'prueba'}
    ]
  }
}

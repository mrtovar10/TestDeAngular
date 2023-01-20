import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.interfaces';
import { PokemonService } from '../services/pokemon.service';
import {FormControl} from '@angular/forms'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit{

  public pokemons:Pokemon[] = [];
  public page:number = 0;
  public search:string ='';
  public arrayNames:string[] = [];
  public control = new FormControl();
  
  //Variables para el componente de detalles del Pokemon
  public mostrar:boolean = false
  public estadisticas = {
    altura:0,
    hp:0,
    ataque:0,
    defensa:0,
    ataqueEspecial:0,
    defensaEspecial:0,
    velocidad:0,
    tipo1:'',
    tipo2:'',
    tipo3:'',
    image:'',
    nombre:'',
  }

  //Variables para la tabla resumen
  public letras:string[] = [
    'A','B','C','D','E','F','G','H','I','J','K','L',
    'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

  constructor(private pokemonService:PokemonService) {}
  ngOnInit(): void {
    this.pokemonService.getAllPokemons()
    .subscribe(resp =>{
      this.pokemons = resp;
    })

    this.pokemonService.getArrayNames()
    .subscribe(resp =>{
      this.arrayNames = resp
    })
  }

  nextPage() {
    this.page += 8
  }

  previousPage() {
    if(this.page > 0) this.page -= 8
  }

  buscarPokemon(textoBuscado:string) {
    this.search = textoBuscado
    this.page = 0
  }

  buscarEstadisticas(id:string){
    this.pokemonService.getStats(id)
    .subscribe(resp=>{
      this.estadisticas = {
        altura:resp.altura,
        hp:resp.hp,
        ataque:resp.ataque,
        defensa:resp.defensa,
        ataqueEspecial:resp.ataqueEspecial,
        defensaEspecial:resp.defensaEspecial,
        velocidad:resp.velocidad,
        tipo1:resp.tipo1,
        tipo2:resp.tipo2,
        tipo3:resp.tipo3,
        image:resp.image,
        nombre:resp.nombre,
      }
    })
    this.mostrar = true
  }

  cerrarDetalles(){
    this.mostrar=false
  }

  pokemonsPorLetra(letra:string){
    return this.arrayNames.filter(e=>e[0]===letra.toLocaleLowerCase()).length
  }
  
}

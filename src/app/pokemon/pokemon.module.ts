import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FiltroPipe } from './pipes/filtro.pipe';



@NgModule({
  declarations: [
    ListComponent,
    FiltroPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListComponent,
  ],
})
export class PokemonModule { }

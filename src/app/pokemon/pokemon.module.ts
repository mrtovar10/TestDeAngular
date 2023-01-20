import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FiltroPipe, FiltroAutocomplete } from './pipes/filtro.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import {MatAutocompleteModule} from '@angular/material/autocomplete'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'

@NgModule({
  declarations: [
    ListComponent,
    FiltroPipe,
    FiltroAutocomplete
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports:[
    ListComponent,
  ],
})
export class PokemonModule { }

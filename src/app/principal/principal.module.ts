import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './films/films.component';



@NgModule({
  declarations: [
    FilmsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FilmsComponent
  ]
})
export class PrincipalModule { }

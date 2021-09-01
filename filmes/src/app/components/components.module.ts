import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MoviesPosterGridComponent } from './movies-poster-grid/movies-poster-grid.component';



@NgModule({
  declarations: [
    NavbarComponent,
    MoviesPosterGridComponent
  ],
  exports: [
    NavbarComponent,
    MoviesPosterGridComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }

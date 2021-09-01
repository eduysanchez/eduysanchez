import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent } from './listagem/listagem.component';
import { InterfacesComponent } from './interfaces/interfaces.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    ListagemComponent,
    InterfacesComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }

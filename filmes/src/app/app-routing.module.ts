import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemComponent } from './pages/listagem/listagem.component';
import { InterfacesComponent } from './pages/interfaces/interfaces.component';

const routes: Routes = [
  {path: 'listagem', component: ListagemComponent},
  {path: 'interfaces', component: InterfacesComponent},
  {path: '**', redirectTo: 'listagem'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

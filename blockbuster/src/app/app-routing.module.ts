import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieRentComponent } from './pages/movie-rent/movie-rent.component';

const routes: Routes = [
  // {path:'lista-de-filmes', component:HomeComponent},
  {path:'movie-rent', component:MovieRentComponent},
  {path:'movie/:id', component:MovieComponent},
  {path:'search/:text', component:SearchComponent},
  {path:'**', redirectTo:'/movie-rent'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

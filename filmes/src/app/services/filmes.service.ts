import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as data from '../../assets/json/filmes.json';
import { Filme } from '../interfaces/filmes';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor() { }

  getJsonContent(): Observable<Array<Filme>>{
    return of(data as any);
  }

}

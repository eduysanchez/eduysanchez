import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../../services/filmes.service';
import { Filme } from '../../interfaces/filmes';

@Component({
  selector: 'app-interfaces',
  templateUrl: './interfaces.component.html',
  styleUrls: ['./interfaces.component.css']
})
export class InterfacesComponent implements OnInit {

  public movies: Filme[] = [];

  constructor(private filmesServices: FilmesService) { }

  ngOnInit(): void {
    this.filmesServices.getJsonContent()
    .subscribe( resp => {
      for (let i = 0; i < resp.length; i++) {
        const element = resp[i];
        this.movies.push(element);
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../../services/filmes.service';
import { Filme } from '../../interfaces/filmes';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  listagem: Filme[] = [];

  constructor(private filmesServices: FilmesService) { }

  ngOnInit(): void {
    this.filmesServices.getJsonContent()
    .subscribe( resp => {
      for (let i = 0; i < resp.length; i++) {
        const element = resp[i];
        this.listagem.push(element);
      }
    });
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Filme } from '../../interfaces/filmes';

@Component({
  selector: 'app-movies-poster-grid',
  templateUrl: './movies-poster-grid.component.html',
  styleUrls: ['./movies-poster-grid.component.css']
})
export class MoviesPosterGridComponent implements OnInit {

  @Input() movies: Filme[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.movies);
    
  }

}

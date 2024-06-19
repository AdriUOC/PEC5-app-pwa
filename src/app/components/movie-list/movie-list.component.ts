import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MovieDTO } from 'src/app/models/movie.dto';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0.2,
        })
      ),
      transition('void <=> *', animate(1500)),
    ]),
  ],
})
export class MovieListComponent implements OnInit {
  movies: MovieDTO[];
  view: string = 'table';
  loading: boolean = true;

  constructor(private movieService: MovieService) {
    this.movies = [];
  }

  ngOnInit() {
    this.movieService.getMovies().subscribe((movies) => {
      setTimeout(() => {
        this.movies = movies;
        this.loading = false;
      }, 500);
    });
  }

  setView(view: string): void {
    this.view = view;
  }
}

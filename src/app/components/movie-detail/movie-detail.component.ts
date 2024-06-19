import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDTO } from 'src/app/models/movie.dto';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  movie: MovieDTO;
  details: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {
    this.movie = new MovieDTO('', '', '', '', '', '', '');
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.movieService.getMovieById(id).subscribe((movie: MovieDTO) => {
        this.movie = movie;
      });
    }
  }

  showDetails() {
    this.details = !this.details;
  }
}

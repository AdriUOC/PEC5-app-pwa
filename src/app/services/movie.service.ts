import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { MovieDTO } from '../models/movie.dto';
import { MovieApiResponseDTO } from '../models/movieApiResponse.dto';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'https://ghibliapi.vercel.app/films';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<MovieDTO[]> {
    return this.http.get<MovieApiResponseDTO[]>(this.apiUrl).pipe(
      map((movies) => {
        return movies.map((movie) => {
          return new MovieDTO(
            movie.id,
            movie.title,
            movie.image,
            movie.director,
            movie.release_date,
            movie.running_time,
            movie.url
          );
        });
      })
    );
  }

  getMovieById(id: string): Observable<MovieDTO> {
    return this.http.get<MovieApiResponseDTO>(`${this.apiUrl}/${id}`).pipe(
      map((movie) => {
        return new MovieDTO(
          movie.id,
          movie.title,
          movie.image,
          movie.director,
          movie.release_date,
          movie.running_time,
          movie.url
        );
      })
    );
  }
}

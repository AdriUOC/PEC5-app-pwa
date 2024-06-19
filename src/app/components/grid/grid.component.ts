import { Component, Input } from '@angular/core';
import { MovieDTO } from 'src/app/models/movie.dto';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent {
  @Input() movies: MovieDTO[] = [];
  displayedColumns: string[] = [
    'title',
    'director',
    'release_date',
    'running_time',
    'actions',
  ];
}

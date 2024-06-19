export class MovieDTO {
  id: string;
  title: string;
  image: string;
  director: string;
  release_date: string;
  running_time: string;
  url: string;

  constructor(
    id: string,
    title: string,
    image: string,
    director: string,
    release_date: string,
    running_time: string,
    url: string
  ) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.director = director;
    this.release_date = release_date;
    this.running_time = running_time;
    this.url = url;
  }
}

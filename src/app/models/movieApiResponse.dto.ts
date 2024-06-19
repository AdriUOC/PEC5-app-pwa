// Modelo para recibir los datos de la api
export class MovieApiResponseDTO {
  id: string;
  title: string;
  original_title: string;
  original_title_romanised: string;
  image: string;
  movie_banner: string;
  description: string;
  director: string;
  producer: string;
  release_date: string;
  running_time: string;
  rt_score: string;
  people: string[];
  species: string[];
  locations: string[];
  vehicles: string[];
  url: string;

  constructor(
    id: string,
    title: string,
    original_title: string,
    original_title_romanised: string,
    image: string,
    movie_banner: string,
    description: string,
    director: string,
    producer: string,
    release_date: string,
    running_time: string,
    rt_score: string,
    people: string[],
    species: string[],
    locations: string[],
    vehicles: string[],
    url: string
  ) {
    this.id = id;
    this.title = title;
    this.original_title = original_title;
    this.original_title_romanised = original_title_romanised;
    this.image = image;
    this.movie_banner = movie_banner;
    this.description = description;
    this.director = director;
    this.producer = producer;
    this.release_date = release_date;
    this.running_time = running_time;
    this.rt_score = rt_score;
    this.people = people;
    this.species = species;
    this.locations = locations;
    this.vehicles = vehicles;
    this.url = url;
  }
}

export interface Film {
  title: string;
  episode_id: number;
  characters: string[];
  created: string;
  director: string;
  edited: string;
  opening_crawl: string;
  producer: string;
  release_date: string;
  url: string;
  starships: string[];
  species: string[];
  planets: string[];
}
export interface FilmList {
  list: Film[];
  isLoading: boolean;
  page: number;
  total: number;
  limit: number;
  specificFilm: Film;
}

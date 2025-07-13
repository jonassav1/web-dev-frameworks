import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export interface Directors {
  movieId: number;
  personId: number;
}

export interface Movies {
  id: Generated<number | null>;
  title: string;
  year: number | null;
}

export interface People {
  birth: number | null;
  id: Generated<number | null>;
  name: string;
}

export interface Ratings {
  movieId: number;
  rating: number;
  votes: number;
}

export interface Screenings {
  id: Generated<number>;
  movieId: number;
  ticketsLeft: number;
  timestamp: string;
  totalTickets: number;
}

export interface Stars {
  movieId: number;
  personId: number;
}

export interface DB {
  directors: Directors;
  movies: Movies;
  people: People;
  ratings: Ratings;
  screenings: Screenings;
  stars: Stars;
}

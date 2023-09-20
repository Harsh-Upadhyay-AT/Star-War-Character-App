export interface Peoples {
    url: string;
    id: number;
    name: string;
    height: number;
    mass: number;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
  }
  export interface PeoplesList {
    list: Peoples[];
    specificPerson: Peoples
    isLoading: boolean;
    page: number;
    total: number;
    limit: number;
  }
  
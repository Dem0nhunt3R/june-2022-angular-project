interface ILocation {
  name: string;
  url: string;
}

interface IOrigin {
  name: string;
  url: string;
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  created: string;
  episode: string[];
  gender: string;
  image: string;
  location: ILocation
  origin: IOrigin;
}

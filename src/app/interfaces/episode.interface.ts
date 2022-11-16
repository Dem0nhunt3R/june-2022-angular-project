import {ICharacter} from "./character.interface";

export interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  characters: ICharacter[],
  created: string;
  urls: string;
  episode: string;
}

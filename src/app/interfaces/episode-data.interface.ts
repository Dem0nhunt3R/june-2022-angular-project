import {IEpisode} from "./episode.interface";

interface IInfo {
  count: number;
  next: string;
  pages: number;
  prev: string;
}

interface IEpisodeData {
  info: IInfo;
  results: IEpisode[]
}

export {
  IInfo, IEpisodeData
}

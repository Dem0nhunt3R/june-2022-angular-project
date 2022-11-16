import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../configs";
import {ICharacter, IEpisode, IEpisodeData} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  constructor(private httpClient: HttpClient) {
  }

  getEpisodes(url?: string): Observable<IEpisodeData> {
    if (url) {
      return this.httpClient.get<IEpisodeData>(url);
    } else {
      return this.httpClient.get<IEpisodeData>(urls.episodes);
    }
  }

  getEpisode(id: string): Observable<IEpisode> {
    return this.httpClient.get<IEpisode>(urls.episodes + '/' + id);
  }

  getCharacter(url: string): Observable<ICharacter> {
    return this.httpClient.get<ICharacter>(url);
  }
}


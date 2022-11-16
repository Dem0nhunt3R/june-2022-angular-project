import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {IEpisodeData} from "../interfaces";
import {EpisodesService} from "./episodes.service";

@Injectable({
  providedIn: 'root'
})
export class EpisodesResolver implements Resolve<IEpisodeData> {
  constructor(private episodesService: EpisodesService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IEpisodeData> {
    return this.episodesService.getEpisodes();
  }
}

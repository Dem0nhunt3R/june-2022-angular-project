import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {IEpisode} from "../interfaces";
import {EpisodesService} from "./episodes.service";

@Injectable({
  providedIn: 'root'
})
export class EpisodeDetailsResolver implements Resolve<IEpisode> {
  constructor(private episodesService: EpisodesService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IEpisode> {
    return this.episodesService.getEpisode(route.params['id']);
  }
}

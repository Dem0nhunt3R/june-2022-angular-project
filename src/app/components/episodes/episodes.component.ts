import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {EpisodesService} from "../../services";
import {IEpisode, IInfo} from "../../interfaces";

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  episodes: IEpisode[];
  info: IInfo;

  constructor(private episodesService: EpisodesService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({data}) => {
      this.episodes = data.results;
      this.info = data.info;
    });
  }


  next() {
    if (this.info.next) {
      this.episodesService.getEpisodes(this.info.next).subscribe(({results, info}) => {
        this.episodes = results;
        this.info = info;
      })
    }
  }

  prev() {
    if (this.info.prev) {
      this.episodesService.getEpisodes(this.info.prev).subscribe(({results, info}) => {
        this.episodes = results;
        this.info = info;
      })
    }
  }
}

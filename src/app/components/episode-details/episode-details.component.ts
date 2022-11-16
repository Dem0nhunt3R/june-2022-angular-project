import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {EpisodesService} from "../../services";
import {ICharacter} from "../../interfaces";

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.css']
})
export class EpisodeDetailsComponent implements OnInit {
  characters: ICharacter[] = [];
  name = '';
  episode = '';
  air_date = '';

  constructor(private activatedRoute: ActivatedRoute, private episodesService: EpisodesService) {

  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({data}) => {
      this.name = data.name;
      this.episode = data.episode;
      this.air_date = data.air_date;
      data.characters.map((character: string) => this.episodesService.getCharacter(character).subscribe(value => {
        this.characters.push(value)
      }))
    });
  }

}

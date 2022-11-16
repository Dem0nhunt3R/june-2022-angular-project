import {Component, Input, OnInit} from '@angular/core';

import {IEpisode} from "../../interfaces";

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {
  @Input()
  episode: IEpisode;

  constructor() {
  }

  ngOnInit(): void {
  }

}

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {MainLayoutComponent} from './layouts';
import {EpisodeDetailsResolver, EpisodesResolver} from "./services";
import {EpisodeComponent, EpisodeDetailsComponent, EpisodesComponent, HeaderComponent} from "./components";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'episodes', pathMatch: 'full'},
      {path: 'episodes', resolve: {data: EpisodesResolver}, component: EpisodesComponent},
      {path: 'episodes/:id', resolve: {data: EpisodeDetailsResolver}, component: EpisodeDetailsComponent}
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    EpisodesComponent,
    EpisodeDetailsComponent,
    EpisodeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

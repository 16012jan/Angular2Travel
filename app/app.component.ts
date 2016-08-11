import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-app',
  providers: [HeroService],
  template:`
 
<h1>Latest posts</h1>
  <div class="post-list">
  <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    <article *ngFor="let hero of heroes" [class.selected]="hero === selectedHero" (click)="onSelect(hero)">
      <div class="row">
        <div class="col-md-5 col-sm-5 col-xs-12">
          <a href=""><img class="post-thumbnail" src="../../images/new-york.jpg" alt=""></a>
        </div>
        <div class="col-md-7 col-sm-7 col-xs-12 post-content">
          <div class="post-meta media">
            <a href=""><img class="img-circle media-object" src="../../images/user2.jpg"></a>
            <div class="media-body">
              <div class="post-author">{{hero.name}}</div>
              <div class="post-date"><span class="fa fa-clock-o"></span>{{hero.name}}</div>
              <div class="post-category">{{hero.name}}</div>
            </div>
          </div>
          <h2 class="post-title">{{title}}</h2>
          <div class="post-text">{{hero.name}}</div>
          <!--div class="post-tags">Tags: <a href="" ng-repeat="tag in post.tags_data">{{tag.name}}</a></div-->
        </div>
      </div>
      <div class="clear"></div>
    </article>
  </div>
    `
})

export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService) { }
  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero) { this.selectedHero = hero; }
}
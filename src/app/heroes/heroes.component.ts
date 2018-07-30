import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService,
              private toastr: ToastrService) { 
  }

  showInfo(): void {
    this.toastr.info('Info', 'The wee toastr works.');
  }

  showError(): void {
    this.toastr.error('Error', 'You have not entered a hero name.');
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
    this.toastr.success('Hello world!', 'I retrieved all the heroes!');
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return this.showError(); }
    this.heroService.addHero({ name } as Hero)
    .subscribe(hero => {
      this.heroes.push(hero);
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
    this.toastr.warning('Hero deleted', `${hero.name} deleted.`);
  }

  ngOnInit() {
    this.getHeroes();
  }

}

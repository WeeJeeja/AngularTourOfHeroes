import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ToastrService } from 'ngx-toastr';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
 
  constructor(private heroService: HeroService,
              private toastr: ToastrService) { }
 
  ngOnInit() {
    this.getHeroes();
  }

  showInfo() {
    this.toastr.info('Hello world!', 'Toastr fun!');
  }
 
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
      
  }
}

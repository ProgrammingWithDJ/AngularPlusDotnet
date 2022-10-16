import { Component } from '@angular/core';
import { SuperHero } from './models/super-hero';
import { SuperHeroService } from './services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


EditHero(hero: SuperHero) {
this.heroToEdit =hero;
}

initNewHero() {
this.heroToEdit= new SuperHero();
}
  title = 'SuperHero';
  heroes: SuperHero[] =[];
heroToEdit?:SuperHero;
columnsToDisplay =['name','firstName','lastName','place','Button']
  constructor(private superHeroService: SuperHeroService) {}

  ngOnInit() : void {
 this.superHeroService.
 getSuperHeros()
  .subscribe((result: SuperHero[]) => (this.heroes = result));
  }

  updateHeroList(heroes: SuperHero[])
  {
this.heroes =heroes;
  }
}

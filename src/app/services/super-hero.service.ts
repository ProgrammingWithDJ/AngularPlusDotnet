import { Injectable } from '@angular/core';
import { SuperHero } from '../models/super-hero';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  constructor() { }

  public getSuperHeros(): SuperHero[]{

    let hero = new SuperHero();
    hero.id =1;
    hero.name ="Spiderman";
    hero.firstName="peter";
    hero.lastName="parker";
    hero.place="New york city";

    return [hero];
  }
}

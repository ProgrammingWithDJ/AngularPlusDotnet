import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SuperHero } from '../../models/super-hero';
import { SuperHeroService } from '../../services/super-hero.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {
  @Input() hero?: SuperHero;
  @Output() herosUpdated = new EventEmitter<SuperHero[]>;


createHero(hero: SuperHero) {
this.superHeroService.CreateSuperHeros(hero)
.subscribe((heroes:SuperHero[]) => this.herosUpdated.emit(heroes));
}
deleteHero(hero: SuperHero) {
this.superHeroService.DeleteSuperHeros(hero).
subscribe((heroes:SuperHero[]) => this.herosUpdated.emit(heroes));
}
updateHero(hero: SuperHero) {
this.superHeroService.UpdateSuperHeros(hero)
.subscribe((heroes: SuperHero[]) => this.herosUpdated.emit(heroes));
}

  
  constructor(private superHeroService: SuperHeroService) { }

  ngOnInit(): void {
  }

}

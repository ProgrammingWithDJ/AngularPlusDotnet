import { Injectable } from '@angular/core';
import { SuperHero } from '../models/super-hero';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  private url ="SuperHero";

  constructor(private http: HttpClient) { }

  public getSuperHeros(): Observable<SuperHero[]>{
        
    return this.http.get<SuperHero[]>(`${environment.apiUrl}/${this.url}`);
  }

  public UpdateSuperHeros(hero: SuperHero): Observable<SuperHero[]>{
        
    return this.http.put<SuperHero[]>(`${environment.apiUrl}/${this.url}`,hero);
  }

  public CreateSuperHeros(hero: SuperHero): Observable<SuperHero[]>{
        
    return this.http.post<SuperHero[]>(`${environment.apiUrl}/${this.url}`,hero);
  }

  public DeleteSuperHeros(hero: SuperHero): Observable<SuperHero[]>{
        
    return this.http.delete<SuperHero[]>(`${environment.apiUrl}/${this.url}/${hero.id}`);
  }
}

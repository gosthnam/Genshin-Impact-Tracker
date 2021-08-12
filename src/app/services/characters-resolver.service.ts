import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Character } from '@shared/character.service';
import { QueryService } from './query.service';

@Injectable({
  providedIn: 'root'
})
export class CharactersResolverService implements Resolve<Character[]> {

  constructor(private queries: QueryService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
  Observable<Character[]> | Promise<Character[]> | Character[] {
    return this.queries.allCharacter(['all']);
  }
}

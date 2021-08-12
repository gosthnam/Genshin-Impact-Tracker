import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import {CharacterListComponent} from '@components/character-list/character-list.component';
import {WeaponListComponent} from '@components/weapon-list/weapon-list.component';
import {PageNotFoundComponent} from '@components/page-not-found/page-not-found.component';
import { CharactersResolverService } from '@services/characters-resolver.service';

const routes: Routes = [
   {
     path: 'character-list', 
     component: CharacterListComponent, 
     resolve: {characters: CharactersResolverService}
    },
   {path: 'weapon-list', component: WeaponListComponent},
   {path: '', redirectTo: '/character-list', pathMatch: 'full'},
   {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

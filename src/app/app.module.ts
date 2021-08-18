import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxElectronModule } from 'ngx-electron';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// material-ui
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// components
import { CharacterListComponent } from '@components/character-list/character-list.component';
import { WeaponListComponent } from '@components/weapon-list/weapon-list.component';
import { PageNotFoundComponent } from '@components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    WeaponListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxElectronModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

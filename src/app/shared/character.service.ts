import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Character {
  name!: string;
  element!: string;
  weapon!: string;
  normalBossDrop!: string;
  localSpecialty!: string;
  commonMaterialType!: string;
  talentBokkType!: string;
  weeklyBossDrop!: string;
}

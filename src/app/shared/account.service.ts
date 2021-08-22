import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Account {
  name!: string;
  default_account!: string;
}

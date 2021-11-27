import { Injectable } from '@angular/core';
import { IpcRenderer } from 'electron';
import { ElectronService } from 'ngx-electron';
import { Observable } from 'rxjs';

import { Character } from '@shared/character.service';
import { Account } from '@shared/account.service';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  private renderer: IpcRenderer;
  private account!: Account;

  constructor() {
    this.renderer = new ElectronService().ipcRenderer;
    this.getDefaultAccount();
  }

  // accounts
  getDefaultAccount(): void {
    new Observable<Account>(observer => {
      this.renderer.once('response', (event, arg) => {
        this.account = arg;
        observer.next(arg);
        observer.complete();
      });
      this.renderer.send('request', ['default_account']);
    });
  }

  getAllAccount(): Observable<Account[]> {
    return new Observable<Account[]>(observer => {
      this.renderer.once('response', (event, arg: Account[]) => {
        observer.next(arg);
        observer.complete();
      });
      this.renderer.send('request', ['accounts']);
    });
  }

  createAccount(data: string[]): Observable<Account[]> {
    return new Observable<Account[]>(observer => {
      this.renderer.once('response', (event, arg: Account[]) => {
        observer.next(arg);
        observer.complete();
      });
      this.renderer.send('create', data);
    });
  }

  updateAccount(data: string[]): Observable<Account[]> {
    return new Observable<Account[]>(observer => {
      this.renderer.once('response', (event, arg: Account[]) => {
        observer.next(arg);
        observer.complete();
      });
      this.renderer.send('update', data);
    })
  }

  // character
  getAllCharacter(): Observable<Character[]> {
    return new Observable<Character[]>(observer => {
      this.renderer.once('response', (event, arg: Character[]) => {
        observer.next(arg);
        observer.complete();
      });
      this.renderer.send('request', ['characters']);
    });
  }
}

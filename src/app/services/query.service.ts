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

  constructor() {
    this.renderer = new ElectronService().ipcRenderer;
  }

  getDefaultAccount(): Observable<Account> {
    return new Observable<Account>(observer => {
      this.renderer.once('response', (event, arg) => {
        observer.next(arg);
        observer.complete();
      });
      this.renderer.send('request', ['default_account']);
    });
  }

  allCharacter(): Observable<Character[]> {
    return new Observable<Character[]>(observer => {
      this.renderer.once('response', (event, arg: Character[]) => {
        observer.next(arg);
        observer.complete();
      });
      this.renderer.send('request', ['characters']);
    });
  }
}

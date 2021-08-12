import { Injectable } from '@angular/core';
import { IpcRenderer } from 'electron';
import { ElectronService } from 'ngx-electron';
import { Observable } from 'rxjs';

import { Character } from '@shared/character.service';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  private renderer: IpcRenderer;

  constructor() {
    this.renderer = new ElectronService().ipcRenderer;
   }

  allCharacter(data: string[]): Observable<Character[]> {
    return new Observable<Character[]>(observer => {
      this.renderer.once('character-reply', (event, arg: Character[]) => {
        observer.next(arg);
        observer.complete();
      });
      this.renderer.send('character', data);
    });
  }
}

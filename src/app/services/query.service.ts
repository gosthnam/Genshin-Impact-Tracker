import { Injectable } from '@angular/core';
import { IpcRenderer } from 'electron';
import { ElectronService } from 'ngx-electron';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  private renderer: IpcRenderer;

  constructor() {
    this.renderer = new ElectronService().ipcRenderer;
   }

  allCharacter(data: string[]): Observable<any> {
    return new Observable<any>(observer => {
      this.renderer.once('character-reply', (event, arg) => {
        observer.next(arg);
      });
      this.renderer.send('character', data);
    });
  }
}

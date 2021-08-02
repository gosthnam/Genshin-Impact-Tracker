import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  constructor(private _electronService: ElectronService) { }

  ngOnInit(): void {
  }

  testDatabase(): void {
    console.log(this._electronService);
    if (this._electronService.isElectronApp) {
      this._electronService.ipcRenderer.on('asynchronous-message', (event, arg) => {
        console.log(arg);
        
      });
      
      this._electronService.ipcRenderer.send('asynchronous-message', 'ping');
    } else {
      console.log('meh');
    }
    
  }
}

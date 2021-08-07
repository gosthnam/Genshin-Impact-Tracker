import { Component, OnInit } from '@angular/core';
import { QueryService } from '@services/query.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  constructor(private queries: QueryService) { 
  }

  ngOnInit(): void {
  }

  testDatabase(): void {
    this.queries.allCharacter(['all']).subscribe(res => {
      console.log(res);
      
    });
  }
}

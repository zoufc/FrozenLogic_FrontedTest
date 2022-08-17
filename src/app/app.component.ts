import { Component, Input, OnInit } from '@angular/core';
import { PersonService } from './services/person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private personService: PersonService) {}
  @Input() nodes: any;
  ngOnInit(): void {
    //this.loadPersonsTree();
  }
  loadPersonsTree() {
    this.personService.getPersonsTreeRoot().subscribe((data) => {
      this.nodes = data;
    });
  }
  title = 'FrozenTestFront';
}

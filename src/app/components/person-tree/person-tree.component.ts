import { Component, Input, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-tree',
  templateUrl: './person-tree.component.html',
  styleUrls: ['./person-tree.component.scss'],
})
export class PersonTreeComponent implements OnInit {
  constructor(private personService: PersonService) {
    this.loadPersonsTree();
  }
  @Input() nodes: any;

  ngOnInit(): void {}

  //Get the tree data and assign to the nodes variable
  loadPersonsTree() {
    this.personService.getPersonsTreeRoot().subscribe((data) => {
      this.nodes = data;
    });
  }
}

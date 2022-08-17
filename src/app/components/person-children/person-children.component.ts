import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-children',
  templateUrl: './person-children.component.html',
  styleUrls: ['./person-children.component.scss'],
})
export class PersonChildrenComponent implements OnInit {
  @Input() nodes: any;
  constructor(private personService: PersonService, private router: Router) {}

  ngOnInit(): void {}

  //Wrap and unwrap function
  expandNode(nodes: any, nodeId: any) {
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].id == nodeId) {
        nodes[i].expand = !nodes[i].expand;
        break;
      } else {
        this.expandNode(nodes[i].children, nodeId);
      }
    }
  }

  //Delete the node in the local nodes array
  deleNodeInArray(nodes: Array<any>, nodeId: any) {
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].id == nodeId) {
        nodes.splice(i, 1);
        console.log('Deleted in array');
        break;
      } else {
        this.deleNodeInArray(nodes[i].children, nodeId);
      }
    }
  }

  //Delete the node in the database
  deleteNodeInDB(nodeId: any) {
    if (confirm('Do you want remove this node with its children?')) {
      this.personService.deleteNode(nodeId).subscribe(() => {
        console.log(`Node with id=${nodeId} deleted in database`);
      });
      console.log('Deleted');
      //Delete the node in the local nodes array
      this.deleNodeInArray(this.nodes, nodeId);
    }
  }
}

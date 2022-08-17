import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.scss'],
})
export class PersonCreateComponent implements OnInit {
  createNodeForm: FormGroup | any;
  parentId: number | any;
  constructor(
    private personService: PersonService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    //get the parrentId in the URL
    this.parentId = this.router.url.split('/')[2];

    //create node form
    this.createNodeForm = formBuilder.group({
      parent: ['', Validators.required],
      name: ['', Validators.required],
    });
    //disable the parentId input
    this.createNodeForm.controls['parent'].disable();
  }
  ngOnInit(): void {}

  onSubmitCreateNodeForm() {
    const node = this.createNodeForm;
    //Check if the form matches validators requirements
    if (node.invalid) {
      alert('Fields required!');
      return;
    }
    let createObj = { ...node.value, ...{ parent: this.parentId } };
    if (createObj.parent.trim() == '') {
      Reflect.deleteProperty(createObj, 'parent');
    }
    console.log(createObj);

    //If all is OK, it will create the node using the PersonService and return to the tree-view page
    this.personService.addNode(createObj).subscribe(() => {
      alert('Node created successfully!');
      this.router.navigate(['/person-tree']);
    });
  }
}

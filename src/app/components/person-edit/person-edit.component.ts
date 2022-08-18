import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss'],
})
export class PersonEditComponent implements OnInit {
  @Input() actualNodeValue: any;
  editForm: FormGroup | any;
  nodeId: number | any;
  isUpdating: boolean | undefined;
  hasParent: boolean | undefined;
  ngOnInit(): void {}
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private personService: PersonService
  ) {
    this.nodeId = this.router.url.split('/')[2];
    this.personService.getNodeById(this.nodeId).subscribe((res) => {
      this.actualNodeValue = res;
    });
    this.editForm = formBuilder.group({
      name: [''],
      parent: [''],
    });
  }

  onSubmitEditNodeForm() {
    let body = this.editForm.value;
    if (body.parent.trim() == '') {
      Reflect.deleteProperty(body, 'parent');
    }

    //Check if the form matches validators requirements
    if (this.editForm.invalid) {
      alert('Fields required!');
      return;
    }
    this.isUpdating = true;
    //Update the node and return to the tree-view page
    this.personService.updateNode(this.nodeId, body).subscribe({
      next: (v) => console.log(v),
      error: () => {
        this.isUpdating = false;
      },
      complete: () => {
        this.isUpdating = false;
        alert('Node updated successfully!');
        this.router.navigate(['/person-tree']);
      },
    });
  }
}

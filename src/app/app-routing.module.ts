import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonCreateComponent } from './components/person-create/person-create.component';
import { PersonEditComponent } from './components/person-edit/person-edit.component';
import { PersonTreeComponent } from './components/person-tree/person-tree.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'person-tree' },
  { path: 'person-tree', component: PersonTreeComponent },
  { path: 'create/:parentId', component: PersonCreateComponent },
  { path: 'edit/:nodeId', component: PersonEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

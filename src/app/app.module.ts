import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonEditComponent } from './components/person-edit/person-edit.component';
import { PersonTreeComponent } from './components/person-tree/person-tree.component';
import { PersonChildrenComponent } from './components/person-children/person-children.component';
import { PersonCreateComponent } from './components/person-create/person-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PersonTreeComponent,
    PersonEditComponent,
    PersonChildrenComponent,
    PersonCreateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

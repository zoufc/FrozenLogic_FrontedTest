import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonTreeComponent } from './person-tree.component';

describe('PersonTreeComponent', () => {
  let component: PersonTreeComponent;
  let fixture: ComponentFixture<PersonTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

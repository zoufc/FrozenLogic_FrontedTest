import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonChildrenComponent } from './person-children.component';

describe('PersonChildrenComponent', () => {
  let component: PersonChildrenComponent;
  let fixture: ComponentFixture<PersonChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonChildrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDepartamentosComponent } from './add-edit-departamentos.component';

describe('AddEditDepartamentosComponent', () => {
  let component: AddEditDepartamentosComponent;
  let fixture: ComponentFixture<AddEditDepartamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDepartamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

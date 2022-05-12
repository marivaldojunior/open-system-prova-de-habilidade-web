import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSugestoesComponent } from './add-edit-sugestoes.component';

describe('AddEditSugestoesComponent', () => {
  let component: AddEditSugestoesComponent;
  let fixture: ComponentFixture<AddEditSugestoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSugestoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSugestoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDepartamentosComponent } from './show-departamentos.component';

describe('ShowDepartamentosComponent', () => {
  let component: ShowDepartamentosComponent;
  let fixture: ComponentFixture<ShowDepartamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDepartamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

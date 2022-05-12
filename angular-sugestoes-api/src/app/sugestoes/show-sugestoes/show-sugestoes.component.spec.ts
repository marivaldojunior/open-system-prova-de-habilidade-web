import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSugestoesComponent } from './show-sugestoes.component';

describe('ShowSugestoesComponent', () => {
  let component: ShowSugestoesComponent;
  let fixture: ComponentFixture<ShowSugestoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSugestoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSugestoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

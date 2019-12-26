import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaAComponent } from './pregunta-a.component';

describe('PreguntaAComponent', () => {
  let component: PreguntaAComponent;
  let fixture: ComponentFixture<PreguntaAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreguntaAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntaAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

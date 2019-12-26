import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaCComponent } from './pregunta-c.component';

describe('PreguntaCComponent', () => {
  let component: PreguntaCComponent;
  let fixture: ComponentFixture<PreguntaCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreguntaCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntaCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

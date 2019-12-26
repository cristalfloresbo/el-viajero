import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaBComponent } from './pregunta-b.component';

describe('PreguntaBComponent', () => {
  let component: PreguntaBComponent;
  let fixture: ComponentFixture<PreguntaBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreguntaBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntaBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

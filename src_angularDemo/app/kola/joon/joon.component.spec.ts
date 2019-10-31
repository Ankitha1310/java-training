import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoonComponent } from './joon.component';

describe('JoonComponent', () => {
  let component: JoonComponent;
  let fixture: ComponentFixture<JoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

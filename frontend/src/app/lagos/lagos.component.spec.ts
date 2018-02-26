import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LagosComponent } from './lagos.component';

describe('LagosComponent', () => {
  let component: LagosComponent;
  let fixture: ComponentFixture<LagosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LagosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

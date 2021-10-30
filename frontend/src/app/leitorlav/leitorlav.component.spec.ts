import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeitorlavComponent } from './leitorlav.component';

describe('LeitorlavComponent', () => {
  let component: LeitorlavComponent;
  let fixture: ComponentFixture<LeitorlavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeitorlavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeitorlavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

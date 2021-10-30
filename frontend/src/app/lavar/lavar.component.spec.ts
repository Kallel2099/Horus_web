import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LavarComponent } from './lavar.component';

describe('LavarComponent', () => {
  let component: LavarComponent;
  let fixture: ComponentFixture<LavarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LavarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LavarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

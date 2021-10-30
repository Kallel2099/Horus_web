import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistribuirComponent } from './distribuir.component';

describe('DistribuirComponent', () => {
  let component: DistribuirComponent;
  let fixture: ComponentFixture<DistribuirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistribuirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistribuirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

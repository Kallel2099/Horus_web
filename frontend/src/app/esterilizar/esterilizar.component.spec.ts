import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsterilizarComponent } from './esterilizar.component';

describe('EsterilizarComponent', () => {
  let component: EsterilizarComponent;
  let fixture: ComponentFixture<EsterilizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsterilizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsterilizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

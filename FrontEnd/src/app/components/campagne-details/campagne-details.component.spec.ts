import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampagneDetailsComponent } from './campagne-details.component';

describe('CampagneDetailsComponent', () => {
  let component: CampagneDetailsComponent;
  let fixture: ComponentFixture<CampagneDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampagneDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampagneDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

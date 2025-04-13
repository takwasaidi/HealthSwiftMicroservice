import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampagneEditComponent } from './campagne-edit.component';

describe('CampagneEditComponent', () => {
  let component: CampagneEditComponent;
  let fixture: ComponentFixture<CampagneEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampagneEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampagneEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

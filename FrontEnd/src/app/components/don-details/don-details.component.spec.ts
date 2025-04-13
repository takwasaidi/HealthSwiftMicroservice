import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonDetailsComponent } from './don-details.component';

describe('DonDetailsComponent', () => {
  let component: DonDetailsComponent;
  let fixture: ComponentFixture<DonDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

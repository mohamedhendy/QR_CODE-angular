import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillerQrComponent } from './biller-qr.component';

describe('BillerQrComponent', () => {
  let component: BillerQrComponent;
  let fixture: ComponentFixture<BillerQrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillerQrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillerQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

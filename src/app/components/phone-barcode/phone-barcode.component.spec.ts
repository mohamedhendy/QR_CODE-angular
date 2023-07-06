import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneBarcodeComponent } from './phone-barcode.component';

describe('PhoneBarcodeComponent', () => {
  let component: PhoneBarcodeComponent;
  let fixture: ComponentFixture<PhoneBarcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneBarcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneBarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

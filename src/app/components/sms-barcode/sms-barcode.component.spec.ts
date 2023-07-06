import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsBarcodeComponent } from './sms-barcode.component';

describe('SmsBarcodeComponent', () => {
  let component: SmsBarcodeComponent;
  let fixture: ComponentFixture<SmsBarcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsBarcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsBarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

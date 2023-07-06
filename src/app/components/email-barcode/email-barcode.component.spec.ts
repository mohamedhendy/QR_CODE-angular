import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailBarcodeComponent } from './email-barcode.component';

describe('EmailBarcodeComponent', () => {
  let component: EmailBarcodeComponent;
  let fixture: ComponentFixture<EmailBarcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailBarcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailBarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

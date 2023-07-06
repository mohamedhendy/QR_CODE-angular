import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappBarcodeComponent } from './whatsapp-barcode.component';

describe('WhatsappBarcodeComponent', () => {
  let component: WhatsappBarcodeComponent;
  let fixture: ComponentFixture<WhatsappBarcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatsappBarcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsappBarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

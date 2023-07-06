import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfBarcodeComponent } from './pdf-barcode.component';

describe('PdfBarcodeComponent', () => {
  let component: PdfBarcodeComponent;
  let fixture: ComponentFixture<PdfBarcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfBarcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfBarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcardBarcodeComponent } from './vcard-barcode.component';

describe('VcardBarcodeComponent', () => {
  let component: VcardBarcodeComponent;
  let fixture: ComponentFixture<VcardBarcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VcardBarcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VcardBarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

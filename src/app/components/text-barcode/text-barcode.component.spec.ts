import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBarcodeComponent } from './text-barcode.component';

describe('TextBarcodeComponent', () => {
  let component: TextBarcodeComponent;
  let fixture: ComponentFixture<TextBarcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextBarcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
